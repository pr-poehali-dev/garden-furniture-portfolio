import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: 'Беседка "Уютный уголок"',
      category: 'gazebo',
      image: 'https://cdn.poehali.dev/projects/153bc083-e86b-4536-bfb2-a9c2c85ea0ea/files/53aadd0f-3691-4c5b-9b62-b8b62518a3ff.jpg',
      description: 'Просторная беседка из натурального дерева с резными элементами'
    },
    {
      id: 2,
      title: 'Садовый гарнитур "Классика"',
      category: 'furniture',
      image: 'https://cdn.poehali.dev/projects/153bc083-e86b-4536-bfb2-a9c2c85ea0ea/files/0370b8e7-9c4f-4c2c-8891-e413c37f740a.jpg',
      description: 'Комплект садовой мебели: стол и 6 стульев из массива дуба'
    },
    {
      id: 3,
      title: 'Пергола "Виноградная лоза"',
      category: 'gazebo',
      image: 'https://cdn.poehali.dev/projects/153bc083-e86b-4536-bfb2-a9c2c85ea0ea/files/45e973cf-f994-4789-9315-2fa6c5fe7dcb.jpg',
      description: 'Элегантная пергола с естественным дизайном для вьющихся растений'
    }
  ];

  const services = [
    { icon: 'Hammer', title: 'Изготовление беседок', description: 'Создаём уникальные беседки по вашему проекту' },
    { icon: 'Armchair', title: 'Садовая мебель', description: 'Столы, стулья, скамейки из натурального дерева' },
    { icon: 'Ruler', title: 'Индивидуальный дизайн', description: 'Разработка проекта с учётом ваших пожеланий' },
    { icon: 'Truck', title: 'Доставка и монтаж', description: 'Доставим и установим изделия под ключ' }
  ];

  const reviews = [
    { name: 'Мария К.', text: 'Прекрасная беседка! Качество на высоте, всё как договаривались.', rating: 5 },
    { name: 'Сергей В.', text: 'Заказывал садовый гарнитур. Очень доволен работой мастера.', rating: 5 },
    { name: 'Анна П.', text: 'Быстро, качественно, красиво! Рекомендую!', rating: 5 }
  ];

  const filteredPortfolio = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen">
      <nav className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Садовая Мастерская</h1>
          <div className="hidden md:flex gap-6">
            <a href="#hero" className="hover:text-primary transition-colors">Главная</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#catalog" className="hover:text-primary transition-colors">Каталог</a>
            <a href="#about" className="hover:text-primary transition-colors">О нас</a>
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#delivery" className="hover:text-primary transition-colors">Доставка</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="md:hidden" variant="outline" size="icon">
            <Icon name="Menu" size={20} />
          </Button>
        </div>
      </nav>

      <section id="hero" className="relative bg-gradient-to-br from-muted to-background py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <Badge className="mb-4 bg-secondary">Ручная работа</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Садовая мебель и беседки из натурального дерева
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Создаём уютные пространства для вашего сада с душой и заботой о качестве. 
              Каждое изделие — это результат многолетнего опыта и любви к дереву.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="shadow-lg">
                <Icon name="Phone" size={20} className="mr-2" />
                Заказать звонок
              </Button>
              <Button size="lg" variant="outline">
                Наши работы
              </Button>
            </div>
          </div>
          <div className="animate-scale-in">
            <img 
              src="https://cdn.poehali.dev/projects/153bc083-e86b-4536-bfb2-a9c2c85ea0ea/files/53aadd0f-3691-4c5b-9b62-b8b62518a3ff.jpg" 
              alt="Садовая беседка" 
              className="rounded-lg shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Наши услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-fade-in">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Портфолио работ</h2>
          <p className="text-center text-muted-foreground mb-12">Примеры наших проектов</p>
          
          <div className="flex justify-center gap-3 mb-8 flex-wrap">
            <Button 
              variant={activeCategory === 'all' ? 'default' : 'outline'}
              onClick={() => setActiveCategory('all')}
            >
              Все работы
            </Button>
            <Button 
              variant={activeCategory === 'gazebo' ? 'default' : 'outline'}
              onClick={() => setActiveCategory('gazebo')}
            >
              Беседки
            </Button>
            <Button 
              variant={activeCategory === 'furniture' ? 'default' : 'outline'}
              onClick={() => setActiveCategory('furniture')}
            >
              Мебель
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-64 object-cover"
                />
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Каталог изделий</h2>
          
          <Tabs defaultValue="gazebos" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="gazebos">Беседки</TabsTrigger>
              <TabsTrigger value="furniture">Мебель</TabsTrigger>
            </TabsList>
            
            <TabsContent value="gazebos">
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Классическая беседка</CardTitle>
                    <CardDescription>4x4 метра, на 8-10 человек</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-primary mb-4">от 150 000 ₽</p>
                    <Button className="w-full">Заказать</Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Беседка-барбекю</CardTitle>
                    <CardDescription>5x5 метров, с зоной для гриля</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-primary mb-4">от 250 000 ₽</p>
                    <Button className="w-full">Заказать</Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Пергола</CardTitle>
                    <CardDescription>3x6 метров, для вьющихся растений</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-primary mb-4">от 80 000 ₽</p>
                    <Button className="w-full">Заказать</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="furniture">
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Садовый стол</CardTitle>
                    <CardDescription>Массив дуба, 180x90 см</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-primary mb-4">от 35 000 ₽</p>
                    <Button className="w-full">Заказать</Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Комплект стульев</CardTitle>
                    <CardDescription>6 стульев из массива</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-primary mb-4">от 45 000 ₽</p>
                    <Button className="w-full">Заказать</Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Садовая скамья</CardTitle>
                    <CardDescription>Со спинкой, 150 см</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-primary mb-4">от 25 000 ₽</p>
                    <Button className="w-full">Заказать</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">О компании</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Мы занимаемся изготовлением садовой мебели и беседок более 10 лет. 
              Каждое изделие создаётся вручную из отборного натурального дерева с соблюдением 
              всех технологий обработки и защиты древесины.
            </p>
            <p className="text-lg text-muted-foreground">
              Наша цель — создавать долговечные, красивые и функциональные изделия, 
              которые будут радовать вас и ваших близких многие годы.
            </p>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Отзывы клиентов</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="delivery" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Доставка и оплата</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <Icon name="Truck" size={32} className="text-primary mb-4" />
                <CardTitle>Доставка</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-secondary mt-0.5" />
                    <span>Бесплатная доставка по Мелитополю</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-secondary mt-0.5" />
                    <span>Доставка в регионы транспортной компанией</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-secondary mt-0.5" />
                    <span>Монтаж и установка под ключ</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <Icon name="CreditCard" size={32} className="text-primary mb-4" />
                <CardTitle>Оплата</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-secondary mt-0.5" />
                    <span>Наличными при получении</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-secondary mt-0.5" />
                    <span>Безналичный расчёт</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-secondary mt-0.5" />
                    <span>Рассрочка на 6 месяцев</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Контакты</h2>
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Icon name="User" size={24} className="text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Мастер</h3>
                      <p className="text-muted-foreground">Васюков Алексей Иванович</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Icon name="Phone" size={24} className="text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Телефон</h3>
                      <a href="tel:+79151234567" className="text-muted-foreground hover:text-primary transition-colors">
                        +7 (915) 123-45-67
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Icon name="MapPin" size={24} className="text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Адрес</h3>
                      <p className="text-muted-foreground">Мелитополь</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Icon name="Clock" size={24} className="text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Время работы</h3>
                      <p className="text-muted-foreground">Ежедневно с 9:00 до 20:00</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button size="lg" className="w-full">
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    Связаться с нами
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">© 2024 Садовая Мастерская. Все права защищены.</p>
          <p className="text-sm opacity-90">Васюков Алексей Иванович | +7 (915) 123-45-67</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;