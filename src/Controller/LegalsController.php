<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class LegalsController extends AbstractController
{

    #[Route('/cookie-policy', name: 'app_cookie_policy')]
    public function cookiePolicy(): Response
    {
        return $this->render('legals/cookie-policy.html.twig');
    }

    #[Route('/privacy-policy', name: 'app_privacy_policy')]
    public function privacyPolicy(): Response
    {
        return $this->render('legals/privacy-policy.html.twig');
    }

    #[Route('/terms-of-service', name: 'app_terms_of_service')]
    public function termsOfService(): Response
    {
        return $this->render('legals/terms-of-service.html.twig');
    }
}