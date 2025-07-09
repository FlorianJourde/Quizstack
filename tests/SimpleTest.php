<?php
// tests/SimpleTest.php
namespace App\Tests;

use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

class SimpleTest extends KernelTestCase
{
    public function testKernelBoots(): void
    {
        $kernel = self::bootKernel();
        $this->assertSame('test', $kernel->getEnvironment());
    }
}