<?php

namespace App\Entity;

use App\Repository\CommentsRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CommentsRepository::class)]
class Comments
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'comments')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Users $user_id = null;

    #[ORM\Column]
    private ?int $question_id = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $content = null;

    #[ORM\Column]
    private ?bool $status = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $creation_date = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $update_date = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(int $id): static
    {
        $this->id = $id;

        return $this;
    }

    public function getUserId(): ?Users
    {
        return $this->user_id;
    }

    public function setUserId(?Users $user_id): static
    {
        $this->user_id = $user_id;

        return $this;
    }

    public function getQuestionId(): ?int
    {
        return $this->question_id;
    }

    public function setQuestionId(int $question_id): static
    {
        $this->question_id = $question_id;

        return $this;
    }

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(string $content): static
    {
        $this->content = $content;

        return $this;
    }

    public function isStatus(): ?bool
    {
        return $this->status;
    }

    public function setStatus(bool $status): static
    {
        $this->status = $status;

        return $this;
    }

    public function getCreationDate(): ?\DateTimeImmutable
    {
        return $this->creation_date;
    }

    public function setCreationDate(\DateTimeImmutable $creation_date): static
    {
        $this->creation_date = $creation_date;

        return $this;
    }

    public function getUpdateDate(): ?\DateTimeImmutable
    {
        return $this->update_date;
    }

    public function setUpdateDate(\DateTimeImmutable $update_date): static
    {
        $this->update_date = $update_date;

        return $this;
    }
}
