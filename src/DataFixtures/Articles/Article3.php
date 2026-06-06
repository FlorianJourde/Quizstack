<?php

namespace App\DataFixtures\Articles;

use App\Entity\Article;
use Doctrine\Persistence\ObjectManager;

class Article3
{
    public function createArticle(ObjectManager $manager, \DateTimeImmutable $date): void
    {
        $article = new Article();

        $article->setTitle('Calisthenics Objects: Jeff Bay\'s 9 Rules for Better Code');
        $article->setSlug('calisthenics-objects-jeff-bay-9-rules-better-code');
        $article->setExcerpt('Discover Jeff Bay\'s Object Calisthenics, a set of 9 strict programming rules designed to improve your object-oriented code quality through deliberate practice.');
        $article->setImage('desktop.png');
        $article->setStatus(false);
        $article->setCreationDate($date);
        $article->setUpdateDate($date);

        $article->setContent(
            <<<'MARKDOWN'
            In 2008, Jeff Bay introduced a radical exercise in the book "ThoughtWorks Anthology." His premise was simple: following strict, almost extreme constraints during practice sessions produces better habits that carry into everyday coding.

            He called this approach Object Calisthenics—programming exercises designed to strengthen your object-oriented design muscles, much like physical calisthenics build body strength through disciplined repetition.
            
            These nine rules aren't meant for production code verbatim. They're training constraints. By forcing yourself to follow them during practice, you internalize principles that naturally improve all your code.
            
            ## Rule 1: Only One Level of Indentation Per Method
            
            Nested conditionals and loops create complexity. Each indentation level adds cognitive load. Jeff Bay's first rule eliminates this by restricting methods to a single indentation level.
            
            Consider this typical code:
            
            ```java
            public void processOrders(List<Order> orders) {
                for (Order order : orders) {
                    if (order.isValid()) {
                        for (Item item : order.getItems()) {
                            if (item.isInStock()) {
                                ship(item);
                            }
                        }
                    }
                }
            }
            ```
            
            Three levels of indentation obscure the method's purpose. Applying the rule forces extraction:
            
            ```java
            public void processOrders(List<Order> orders) {
                for (Order order : orders) {
                    processOrder(order);
                }
            }
            
            private void processOrder(Order order) {
                if (order.isValid()) {
                    shipAvailableItems(order);
                }
            }
            
            private void shipAvailableItems(Order order) {
                for (Item item : order.getItems()) {
                    shipIfInStock(item);
                }
            }
            
            private void shipIfInStock(Item item) {
                if (item.isInStock()) {
                    ship(item);
                }
            }
            ```
            
            Each method now does one thing. Names document intent. Testing becomes straightforward.
            
            ## Rule 2: Don't Use the ELSE Keyword
            
            The `else` keyword often indicates a method doing multiple things. Eliminating it forces clearer control flow through early returns, polymorphism, or strategy patterns.
            
            Instead of this:
            
            ```java
            public double calculateDiscount(Customer customer) {
                if (customer.isPremium()) {
                    return 0.20;
                } else if (customer.isLoyal()) {
                    return 0.10;
                } else {
                    return 0.0;
                }
            }
            ```
            
            Use early returns:
            
            ```java
            public double calculateDiscount(Customer customer) {
                if (customer.isPremium()) {
                    return 0.20;
                }
                if (customer.isLoyal()) {
                    return 0.10;
                }
                return 0.0;
            }
            ```
            
            Or better yet, leverage polymorphism. Let different customer types define their own discount behavior. The conditional disappears entirely, replaced by object-oriented design.
            
            ## Rule 3: Wrap All Primitives and Strings
            
            Primitive types carry no semantic meaning. An `int` could represent age, quantity, price, or anything else. Wrapping primitives in small objects adds meaning and enables behavior.
            
            Instead of passing raw values:
            
            ```java
            public void createUser(String email, int age) {
                // What validates email format?
                // What ensures age is positive?
            }
            ```
            
            Create meaningful types:
            
            ```java
            public class Email {
                private final String value;
            
                public Email(String value) {
                    if (!value.contains("@")) {
                        throw new IllegalArgumentException("Invalid email");
                    }
                    this.value = value;
                }
            }
            
            public class Age {
                private final int value;
            
                public Age(int value) {
                    if (value < 0 || value > 150) {
                        throw new IllegalArgumentException("Invalid age");
                    }
                    this.value = value;
                }
            }
            
            public void createUser(Email email, Age age) {
                // Validation already handled
                // Types communicate intent
            }
            ```
            
            This approach centralizes validation, improves type safety, and makes method signatures self-documenting.
            
            ## Rule 4: First Class Collections
            
            When a class contains a collection, it should contain nothing else. This forces you to create meaningful collection wrappers with domain-specific behavior.
            
            Instead of exposing raw collections:
            
            ```java
            public class Order {
                private List<Item> items;
                private String customerName;
                private Date orderDate;
            
                public List<Item> getItems() {
                    return items;
                }
            }
            ```
            
            Extract the collection into its own class:
            
            ```java
            public class Items {
                private final List<Item> items;
            
                public Items(List<Item> items) {
                    this.items = new ArrayList<>(items);
                }
            
                public Money totalPrice() {
                    return items.stream()
                        .map(Item::price)
                        .reduce(Money.ZERO, Money::add);
                }
            
                public Items inStock() {
                    return new Items(
                        items.stream()
                            .filter(Item::isInStock)
                            .collect(toList())
                    );
                }
            }
            ```
            
            Collection behavior now lives with the collection. The `Order` class delegates rather than manipulates.
            
            ## Rule 5: One Dot Per Line
            
            Method chaining through multiple objects violates the Law of Demeter. Each dot potentially couples you to another class's internal structure.
            
            This chain knows too much:
            
            ```java
            String city = order.getCustomer().getAddress().getCity();
            ```
            
            If `Address` structure changes, this code breaks—even though it lives in a class that should only know about orders.
            
            Apply the rule by asking objects for what you need:
            
            ```java
            String city = order.getShippingCity();
            ```
            
            The `Order` class handles internal navigation. Calling code stays decoupled from implementation details.
            
            Note that fluent interfaces and builders are exceptions. Chaining methods on the same object doesn't violate this principle:
            
            ```java
            User user = User.builder()
                .name("Alice")
                .email("alice@example.com")
                .build();
            ```
            
            Each dot returns the same builder—no deep object traversal occurs.
            
            ## Rule 6: Don't Abbreviate
            
            Abbreviations hide meaning and cause inconsistency. Is it `usr`, `user`, or `u`? Does `cnt` mean count or content? Does `mgr` mean manager or merger?
            
            Long names feel verbose but communicate clearly:
            
            ```java
            // Abbreviated and unclear
            int calcTotPrc(List<Itm> itms) { }
            
            // Clear and searchable
            int calculateTotalPrice(List<Item> items) { }
            ```
            
            If a name feels too long, the underlying concept might need rethinking. `OrderItemPriceCalculationStrategy` suggests a class doing too much or a missing abstraction.
            
            Modern IDEs autocomplete long names instantly. Readability matters more than keystroke savings.
            
            ## Rule 7: Keep All Entities Small
            
            Jeff Bay suggests limiting classes to 50 lines and packages to 10 files. These specific numbers matter less than the underlying principle: small units are easier to understand, test, and maintain.
            
            A 500-line class invariably does too much. It contains multiple responsibilities waiting to be extracted. A package with 50 files lacks cohesion—subpackages would add clarity.
            
            Small classes force single responsibilities. When you can't add more code without exceeding the limit, you must create new abstractions. This constraint produces better designs than unlimited growth.
            
            ## Rule 8: No Classes With More Than Two Instance Variables
            
            This rule sounds extreme—and it is. Jeff Bay designed it as a forcing function, not a production standard.
            
            The principle behind it: most classes combine two concepts at most. A class with five instance variables likely conflates multiple responsibilities.
            
            Consider this class:
            
            ```java
            public class Order {
                private Customer customer;
                private List<Item> items;
                private Date orderDate;
                private Address shippingAddress;
                private PaymentMethod payment;
            }
            ```
            
            Following the rule strictly forces decomposition:
            
            ```java
            public class Order {
                private OrderDetails details;
                private Fulfillment fulfillment;
            }
            
            public class OrderDetails {
                private Customer customer;
                private Items items;
            }
            
            public class Fulfillment {
                private Shipping shipping;
                private Payment payment;
            }
            ```
            
            Whether this decomposition improves the design depends on context. The exercise reveals hidden concepts—sometimes useful abstractions emerge, sometimes the original design was clearer.
            
            ## Rule 9: No Getters/Setters/Properties
            
            Getters and setters expose internal state, enabling procedural code disguised as object-orientation. Objects become data containers while behavior lives elsewhere.
            
            Instead of asking for data and acting on it:
            
            ```java
            if (account.getBalance() >= amount) {
                account.setBalance(account.getBalance() - amount);
            }
            ```
            
            Tell objects what to do:
            
            ```java
            account.withdraw(amount);
            ```
            
            The `Account` class owns its behavior. Validation, business rules, and state changes happen internally. External code expresses intent rather than implementing mechanics.
            
            This rule pushes toward genuine encapsulation. Objects become behavioral units rather than data structures with methods attached.
            
            ## Applying These Rules
            
            Jeff Bay never intended these rules for production code. They're practice constraints—like a musician playing scales or an athlete doing drills.
            
            Try applying all nine rules during a kata or small project. The friction reveals habits worth examining. Why do you reach for `else`? Why do primitives feel natural? Why do getters appear automatically?
            
            Some rules produce genuinely better code. Single indentation levels, meaningful names, and behavioral objects improve most codebases. Others—like two instance variables maximum—exist purely as exercises.
            
            After practicing under constraints, you'll find yourself naturally writing smaller methods, wrapping primitives when appropriate, and preferring behavior over data exposure. The rules become instincts, applied with judgment rather than dogma.
            
            ## Conclusion
            
            Object Calisthenics offers a structured way to improve object-oriented design skills. The rules feel extreme because they're training tools, not production mandates.
            
            Practice them deliberately. Notice which constraints improve your code and which feel artificial. Over time, the principles behind the rules become intuitive—you'll write cleaner, more maintainable code without consciously following any checklist.
            
            Jeff Bay's contribution wasn't the specific rules but the idea that deliberate practice under constraints strengthens programming skills. Find your weak spots, apply appropriate constraints, and watch your code improve.
            MARKDOWN);

        $manager->persist($article);
        $manager->flush();
    }
}