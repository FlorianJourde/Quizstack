<?php

namespace App\Entity;

use App\Repository\UsersRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: UsersRepository::class)]
class Users
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $username = null;

    #[ORM\Column(length: 255)]
    private ?string $email = null;

    #[ORM\Column(length: 255)]
    private ?string $password = null;

    #[ORM\Column]
    private ?int $role = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $inscription_date = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $last_authentication_date = null;

    /**
     * @var Collection<int, Comments>
     */
    #[ORM\OneToMany(targetEntity: Comments::class, mappedBy: 'user')]
    private Collection $comments;

    /**
     * @var Collection<int, Questions>
     */
    #[ORM\OneToMany(targetEntity: Questions::class, mappedBy: 'user')]
    private Collection $questions;

    #[ORM\OneToOne(mappedBy: 'users', cascade: ['persist', 'remove'])]
    private ?Scores $scores = null;

    public function __construct()
    {
        $this->comments = new ArrayCollection();
        $this->questions = new ArrayCollection();
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

    public function getUsername(): ?string
    {
        return $this->username;
    }

    public function setUsername(string $username): static
    {
        $this->username = $username;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = $email;

        return $this;
    }

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): static
    {
        $this->password = $password;

        return $this;
    }

    public function getRole(): ?int
    {
        return $this->role;
    }

    public function setRole(int $role): static
    {
        $this->role = $role;

        return $this;
    }

    public function getInscriptionDate(): ?\DateTimeImmutable
    {
        return $this->inscription_date;
    }

    public function setInscriptionDate(\DateTimeImmutable $inscription_date): static
    {
        $this->inscription_date = $inscription_date;

        return $this;
    }

    public function getLastAuthenticationDate(): ?\DateTimeImmutable
    {
        return $this->last_authentication_date;
    }

    public function setLastAuthenticationDate(\DateTimeImmutable $last_authentication_date): static
    {
        $this->last_authentication_date = $last_authentication_date;

        return $this;
    }

    /**
     * @return Collection<int, Comments>
     */
    public function getComments(): Collection
    {
        return $this->comments;
    }

    public function addComment(Comments $comment): static
    {
        if (!$this->comments->contains($comment)) {
            $this->comments->add($comment);
            $comment->setUserId($this);
        }

        return $this;
    }

    public function removeComment(Comments $comment): static
    {
        if ($this->comments->removeElement($comment)) {
            // set the owning side to null (unless already changed)
            if ($comment->getUserId() === $this) {
                $comment->setUserId(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Questions>
     */
    public function getQuestions(): Collection
    {
        return $this->questions;
    }

    public function addQuestion(Questions $question): static
    {
        if (!$this->questions->contains($question)) {
            $this->questions->add($question);
            $question->setUser($this);
        }

        return $this;
    }

    public function removeQuestion(Questions $question): static
    {
        if ($this->questions->removeElement($question)) {
            // set the owning side to null (unless already changed)
            if ($question->getUser() === $this) {
                $question->setUser(null);
            }
        }

        return $this;
    }

    public function getScores(): ?Scores
    {
        return $this->scores;
    }

    public function setScores(Scores $scores): static
    {
        // set the owning side of the relation if necessary
        if ($scores->getUsers() !== $this) {
            $scores->setUsers($this);
        }

        $this->scores = $scores;

        return $this;
    }
}
