<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250402172425 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            CREATE TABLE categories (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, status TINYINT(1) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE comments (id INT AUTO_INCREMENT NOT NULL, user_id_id INT NOT NULL, question_id INT NOT NULL, content LONGTEXT NOT NULL, status TINYINT(1) NOT NULL, creation_date DATETIME NOT NULL COMMENT '(DC2Type:datetime_immutable)', update_date DATETIME NOT NULL COMMENT '(DC2Type:datetime_immutable)', INDEX IDX_5F9E962A9D86650F (user_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE level (id INT AUTO_INCREMENT NOT NULL, level INT NOT NULL, title VARCHAR(255) NOT NULL, status TINYINT(1) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE questions (id INT AUTO_INCREMENT NOT NULL, content LONGTEXT NOT NULL, image VARCHAR(255) DEFAULT NULL, creadtion_date DATETIME NOT NULL COMMENT '(DC2Type:datetime_immutable)', update_date DATETIME NOT NULL COMMENT '(DC2Type:datetime_immutable)', status TINYINT(1) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE roles (id INT AUTO_INCREMENT NOT NULL, role VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB
        SQL);
        $this->addSql(<<<'SQL'
            CREATE TABLE users (id INT AUTO_INCREMENT NOT NULL, username VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, role INT NOT NULL, inscription_date DATETIME NOT NULL COMMENT '(DC2Type:datetime_immutable)', last_authentication_date DATETIME NOT NULL COMMENT '(DC2Type:datetime_immutable)', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB
        SQL);
        $this->addSql(<<<'SQL'
            ALTER TABLE comments ADD CONSTRAINT FK_5F9E962A9D86650F FOREIGN KEY (user_id_id) REFERENCES users (id)
        SQL);
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql(<<<'SQL'
            ALTER TABLE comments DROP FOREIGN KEY FK_5F9E962A9D86650F
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE categories
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE comments
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE level
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE questions
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE roles
        SQL);
        $this->addSql(<<<'SQL'
            DROP TABLE users
        SQL);
    }
}
