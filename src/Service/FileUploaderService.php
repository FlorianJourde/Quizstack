<?php

namespace App\Service;

use App\Entity\Questions;
use Exception;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\String\Slugger\SluggerInterface;

class FileUploaderService
{
    public function __construct(
        private string           $targetDirectory,
        private SluggerInterface $slugger,
    )
    {
    }

    public function upload(UploadedFile $file, ?string $oldFilename = null): string
    {
        if ($oldFilename) {
            $this->delete($oldFilename);
        }

        $originalFilename = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
        $safeFilename = $this->slugger->slug($originalFilename);
        $fileName = $safeFilename . '-' . uniqid() . '.' . $file->guessExtension();

        try {
            $file->move($this->getTargetDirectory(), $fileName);
        } catch (FileException $e) {
            throw new Exception('Error uploading file');
        }

        return $fileName;
    }

    public function delete(string $filename): bool
    {
        if (!$filename) {
            return false;
        }

        $filePath = $this->getTargetDirectory() . '/' . $filename;

        if (file_exists($filePath)) {
            return unlink($filePath);
        }

        return false;
    }

    public function getTargetDirectory(): string
    {
        return $this->targetDirectory;
    }
}