<?php
namespace App\EventListener;

use App\Entity\Users;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Security\Http\Event\LoginSuccessEvent;

class AuthenticationSuccessListener implements EventSubscriberInterface
{
    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public static function getSubscribedEvents(): array
    {
        return [
            LoginSuccessEvent::class => 'onLoginSuccess',
        ];
    }

    public function onLoginSuccess(LoginSuccessEvent $event): void
    {
        $user = $event->getUser();

        // Vérifier si l'utilisateur est une instance de notre entité User
        if ($user instanceof Users) {
            // Mettre à jour la date de dernière connexion
            $user->setLastAuthenticationDate(new \DateTimeImmutable());

            // Enregistrer les modifications
            $this->entityManager->persist($user);
            $this->entityManager->flush();
        }
    }
}