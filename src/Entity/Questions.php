<?php

namespace App\Entity;

use App\Repository\QuestionsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: QuestionsRepository::class)]
class Questions
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $content = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $image = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $creation_date = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $update_date = null;

    #[ORM\Column]
    private ?bool $status = null;

    #[ORM\Column]
    private ?bool $correct = null;

    /**
     * @var Collection<int, Answers>
     */
    #[ORM\OneToMany(targetEntity: Answers::class, mappedBy: 'question')]
    private Collection $answer_id;

    #[ORM\Column]
    private ?int $difficulty = null;

    public function __construct()
    {
        $this->answer_id = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(int $id): static
    {
        $this->id = $id;

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

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(?string $image): static
    {
        $this->image = $image;

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

    public function isStatus(): ?bool
    {
        return $this->status;
    }

    public function setStatus(bool $status): static
    {
        $this->status = $status;

        return $this;
    }

    public function isCorrect(): ?bool
    {
        return $this->correct;
    }

    public function setCorrect(bool $correct): static
    {
        $this->correct = $correct;

        return $this;
    }

    /**
     * @return Collection<int, Answers>
     */
    public function getAnswerId(): Collection
    {
        return $this->answer_id;
    }

    public function addAnswerId(Answers $answerId): static
    {
        if (!$this->answer_id->contains($answerId)) {
            $this->answer_id->add($answerId);
            $answerId->setQuestionId($this);
        }

        return $this;
    }

    public function removeAnswerId(Answers $answerId): static
    {
        if ($this->answer_id->removeElement($answerId)) {
            // set the owning side to null (unless already changed)
            if ($answerId->getQuestionId() === $this) {
                $answerId->setQuestionId(null);
            }
        }

        return $this;
    }

    public function getDifficulty(): ?int
    {
        return $this->difficulty;
    }

    public function setDifficulty(int $difficulty): static
    {
        $this->difficulty = $difficulty;

        return $this;
    }
}
