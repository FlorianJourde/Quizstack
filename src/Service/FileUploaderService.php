<?php

namespace App\Service;

use Exception;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\String\Slugger\SluggerInterface;

class FileUploaderService
{
    private string $baseUploadDirectory;
    private SluggerInterface $slugger;

    private const UPLOAD_DIRECTORIES = [
        'questions' => '/uploads/images/questions',
        'users' => '/uploads/images/users',
    ];

    public function __construct(
        string           $baseUploadDirectory,
        SluggerInterface $slugger,
    )
    {
        $this->baseUploadDirectory = $baseUploadDirectory;
        $this->slugger = $slugger;
    }

    public function upload(UploadedFile $file, string $entityType = 'questions', ?string $oldFilename = null): string
    {
        if (!array_key_exists($entityType, self::UPLOAD_DIRECTORIES)) {
            throw new Exception("Invalid entity type: $entityType");
        }

        if ($oldFilename) {
            $this->delete($oldFilename, $entityType);
        }

        $originalFilename = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
        $safeFilename = $this->slugger->slug($originalFilename);
        $fileName = $safeFilename . '-' . uniqid() . '.' . $file->guessExtension();

        try {
            $file->move($this->getTargetDirectory($entityType), $fileName);
        } catch (FileException $e) {
            throw new Exception('Error uploading file');
        }


        return $fileName;
    }

    public function delete(string $filename, string $entityType = 'questions'): bool
    {
        if (!$filename) {
            return false;
        }

        if (!array_key_exists($entityType, self::UPLOAD_DIRECTORIES)) {
            throw new Exception("Invalid entity type: $entityType");
        }

        $filePath = $this->getTargetDirectory($entityType) . '/' . $filename;

        if (file_exists($filePath)) {
            return unlink($filePath);
        }

        return false;
    }

    public function getTargetDirectory(string $entityType = 'questions'): string
    {
        if (!array_key_exists($entityType, self::UPLOAD_DIRECTORIES)) {
            throw new Exception("Invalid entity type: $entityType");
        }

        return $this->baseUploadDirectory . self::UPLOAD_DIRECTORIES[$entityType];
    }
}