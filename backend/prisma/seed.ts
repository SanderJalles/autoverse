import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not defined");
}

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

const brands = [
  {
    name: "Honda",
    country: "Japao",
    logoUrl: "https://example.com/honda.png",
    cars: [
      {
        name: "Civic Hybrid",
        year: 2025,
        category: "Sedan",
        imageUrl: "https://example.com/civic-hybrid.png",
        videoUrl: "https://www.youtube.com/embed/example-civic",
        history:
          "O Civic Hybrid combina a tradicao do sedan medio da Honda com um conjunto eletrificado voltado para eficiencia.",
        averagePrice: 190000,
        specs: {
          engine: "2.0 aspirado",
          electricMotor: "Motor eletrico de tracao",
          horsepower: 143,
          combinedHorsepower: 184,
          batteryCapacity: "1.05 kWh",
          torque: "32.1 kgfm combinado",
          transmission: "e-CVT",
          drivetrain: "FWD",
          acceleration: "7.8s",
          topSpeed: "180 km/h",
          consumption: "18.3 km/l",
        },
      },
      {
        name: "Accord",
        year: 2024,
        category: "Sedan",
        imageUrl: "https://example.com/accord.png",
        videoUrl: "https://www.youtube.com/embed/example-accord",
        history:
          "O Accord e um sedan familiar da Honda conhecido por conforto, confiabilidade e bom espaco interno.",
        averagePrice: 230000,
        specs: {
          engine: "2.0 turbo",
          horsepower: 252,
          torque: "37.7 kgfm",
          transmission: "Automatico 10 marchas",
          drivetrain: "FWD",
          acceleration: "6.2s",
          topSpeed: "250 km/h",
          consumption: "11 km/l",
        },
      },
      {
        name: "HR-V",
        year: 2024,
        category: "SUV",
        imageUrl: "https://example.com/hr-v.png",
        videoUrl: "https://www.youtube.com/embed/example-hrv",
        history:
          "O HR-V e o SUV compacto da Honda, focado em uso urbano, economia e praticidade.",
        averagePrice: 155000,
        specs: {
          engine: "1.5 turbo",
          horsepower: 177,
          torque: "24.5 kgfm",
          transmission: "CVT",
          drivetrain: "FWD",
          acceleration: "8.9s",
          topSpeed: "200 km/h",
          consumption: "12 km/l",
        },
      },
    ],
  },
  {
    name: "Toyota",
    country: "Japao",
    logoUrl: "https://example.com/toyota.png",
    cars: [
      {
        name: "Corolla Hybrid",
        year: 2025,
        category: "Sedan",
        imageUrl: "https://example.com/corolla-hybrid.png",
        videoUrl: "https://www.youtube.com/embed/example-corolla",
        history:
          "O Corolla Hybrid popularizou a tecnologia hibrida da Toyota no segmento de sedans medios.",
        averagePrice: 165000,
        specs: {
          engine: "1.8 flex",
          electricMotor: "Motor eletrico auxiliar",
          horsepower: 101,
          combinedHorsepower: 122,
          batteryCapacity: "1.3 kWh",
          torque: "16.6 kgfm",
          transmission: "e-CVT",
          drivetrain: "FWD",
          acceleration: "11s",
          topSpeed: "180 km/h",
          consumption: "17.5 km/l",
        },
      },
      {
        name: "RAV4 Hybrid",
        year: 2024,
        category: "SUV",
        imageUrl: "https://example.com/rav4-hybrid.png",
        videoUrl: "https://www.youtube.com/embed/example-rav4",
        history:
          "O RAV4 Hybrid e um SUV medio eletrificado com foco em eficiencia, espaco e confiabilidade.",
        averagePrice: 330000,
        specs: {
          engine: "2.5 aspirado",
          electricMotor: "Motores eletricos dianteiro e traseiro",
          horsepower: 176,
          combinedHorsepower: 222,
          batteryCapacity: "1.6 kWh",
          torque: "22.5 kgfm",
          transmission: "e-CVT",
          drivetrain: "AWD",
          acceleration: "8.1s",
          topSpeed: "180 km/h",
          consumption: "14.3 km/l",
        },
      },
      {
        name: "Hilux",
        year: 2024,
        category: "Picape",
        imageUrl: "https://example.com/hilux.png",
        videoUrl: "https://www.youtube.com/embed/example-hilux",
        history:
          "A Hilux e uma picape media reconhecida pela robustez e uso frequente em trabalho e lazer.",
        averagePrice: 320000,
        specs: {
          engine: "2.8 turbodiesel",
          horsepower: 204,
          torque: "50.9 kgfm",
          transmission: "Automatico 6 marchas",
          drivetrain: "4x4",
          acceleration: "10.7s",
          topSpeed: "180 km/h",
          consumption: "10 km/l",
        },
      },
    ],
  },
  {
    name: "BMW",
    country: "Alemanha",
    logoUrl: "https://example.com/bmw.png",
    cars: [
      {
        name: "320i",
        year: 2024,
        category: "Sedan",
        imageUrl: "https://example.com/bmw-320i.png",
        videoUrl: "https://www.youtube.com/embed/example-320i",
        history:
          "O BMW 320i e um sedan premium com foco em dirigibilidade e equilibrio entre conforto e desempenho.",
        averagePrice: 330000,
        specs: {
          engine: "2.0 turbo",
          horsepower: 184,
          torque: "30.6 kgfm",
          transmission: "Automatico 8 marchas",
          drivetrain: "RWD",
          acceleration: "7.1s",
          topSpeed: "235 km/h",
          consumption: "13 km/l",
        },
      },
      {
        name: "X3 xDrive30e",
        year: 2024,
        category: "SUV",
        imageUrl: "https://example.com/bmw-x3-30e.png",
        videoUrl: "https://www.youtube.com/embed/example-x3",
        history:
          "O X3 xDrive30e combina a plataforma SUV da BMW com sistema hibrido plug-in.",
        averagePrice: 470000,
        specs: {
          engine: "2.0 turbo",
          electricMotor: "Motor eletrico integrado ao cambio",
          horsepower: 184,
          combinedHorsepower: 292,
          batteryCapacity: "12 kWh",
          torque: "42.8 kgfm combinado",
          transmission: "Automatico 8 marchas",
          drivetrain: "AWD",
          acceleration: "6.1s",
          topSpeed: "210 km/h",
          consumption: "20 km/l",
        },
      },
      {
        name: "M3 Competition",
        year: 2024,
        category: "Esportivo",
        imageUrl: "https://example.com/bmw-m3.png",
        videoUrl: "https://www.youtube.com/embed/example-m3",
        history:
          "O M3 Competition e a versao de alto desempenho da Serie 3, preparada pela divisao M.",
        averagePrice: 850000,
        specs: {
          engine: "3.0 biturbo",
          horsepower: 510,
          torque: "66.3 kgfm",
          transmission: "Automatico 8 marchas",
          drivetrain: "RWD",
          acceleration: "3.9s",
          topSpeed: "290 km/h",
          consumption: "8 km/l",
        },
      },
    ],
  },
  {
    name: "Ford",
    country: "Estados Unidos",
    logoUrl: "https://example.com/ford.png",
    cars: [
      {
        name: "Mustang GT",
        year: 2024,
        category: "Muscle car",
        imageUrl: "https://example.com/mustang-gt.png",
        videoUrl: "https://www.youtube.com/embed/example-mustang",
        history:
          "O Mustang GT representa a tradicao dos muscle cars americanos com motor V8 e tracao traseira.",
        averagePrice: 530000,
        specs: {
          engine: "5.0 V8",
          horsepower: 486,
          torque: "57.4 kgfm",
          transmission: "Automatico 10 marchas",
          drivetrain: "RWD",
          acceleration: "4.3s",
          topSpeed: "250 km/h",
          consumption: "7 km/l",
        },
      },
      {
        name: "Maverick Hybrid",
        year: 2024,
        category: "Picape",
        imageUrl: "https://example.com/maverick-hybrid.png",
        videoUrl: "https://www.youtube.com/embed/example-maverick",
        history:
          "A Maverick Hybrid e uma picape compacta com foco em eficiencia e uso urbano.",
        averagePrice: 230000,
        specs: {
          engine: "2.5 aspirado",
          electricMotor: "Motor eletrico auxiliar",
          horsepower: 162,
          combinedHorsepower: 194,
          batteryCapacity: "1.1 kWh",
          torque: "28.5 kgfm combinado",
          transmission: "e-CVT",
          drivetrain: "FWD",
          acceleration: "8.6s",
          topSpeed: "180 km/h",
          consumption: "15 km/l",
        },
      },
      {
        name: "Ranger",
        year: 2024,
        category: "Picape",
        imageUrl: "https://example.com/ranger.png",
        videoUrl: "https://www.youtube.com/embed/example-ranger",
        history:
          "A Ranger e uma picape media da Ford voltada para trabalho, aventura e capacidade off-road.",
        averagePrice: 320000,
        specs: {
          engine: "3.0 V6 turbodiesel",
          horsepower: 250,
          torque: "61.2 kgfm",
          transmission: "Automatico 10 marchas",
          drivetrain: "4x4",
          acceleration: "9.2s",
          topSpeed: "190 km/h",
          consumption: "9.5 km/l",
        },
      },
    ],
  },
  {
    name: "Porsche",
    country: "Alemanha",
    logoUrl: "https://example.com/porsche.png",
    cars: [
      {
        name: "911 Carrera",
        year: 2024,
        category: "Esportivo",
        imageUrl: "https://example.com/911-carrera.png",
        videoUrl: "https://www.youtube.com/embed/example-911",
        history:
          "O 911 Carrera e um dos esportivos mais tradicionais do mundo, com motor traseiro e identidade marcante.",
        averagePrice: 890000,
        specs: {
          engine: "3.0 boxer biturbo",
          horsepower: 385,
          torque: "45.9 kgfm",
          transmission: "PDK 8 marchas",
          drivetrain: "RWD",
          acceleration: "4.2s",
          topSpeed: "293 km/h",
          consumption: "9 km/l",
        },
      },
      {
        name: "Cayenne E-Hybrid",
        year: 2024,
        category: "SUV",
        imageUrl: "https://example.com/cayenne-hybrid.png",
        videoUrl: "https://www.youtube.com/embed/example-cayenne",
        history:
          "O Cayenne E-Hybrid combina desempenho de SUV premium com sistema hibrido plug-in.",
        averagePrice: 760000,
        specs: {
          engine: "3.0 V6 turbo",
          electricMotor: "Motor eletrico integrado",
          horsepower: 304,
          combinedHorsepower: 470,
          batteryCapacity: "25.9 kWh",
          torque: "66.3 kgfm combinado",
          transmission: "Automatico 8 marchas",
          drivetrain: "AWD",
          acceleration: "4.9s",
          topSpeed: "254 km/h",
          consumption: "20 km/l",
        },
      },
      {
        name: "Taycan",
        year: 2024,
        category: "Eletrico",
        imageUrl: "https://example.com/taycan.png",
        videoUrl: "https://www.youtube.com/embed/example-taycan",
        history:
          "O Taycan e o esportivo eletrico da Porsche, desenvolvido com foco em desempenho e recarga rapida.",
        averagePrice: 650000,
        specs: {
          electricMotor: "Dois motores eletricos",
          horsepower: 408,
          batteryCapacity: "79.2 kWh",
          torque: "35.2 kgfm",
          transmission: "Automatica 2 marchas",
          drivetrain: "AWD",
          acceleration: "5.4s",
          topSpeed: "230 km/h",
          consumption: "Eletrico",
        },
      },
    ],
  },
];

async function main() {
  await prisma.specs.deleteMany();
  await prisma.car.deleteMany();
  await prisma.brand.deleteMany();

  for (const brand of brands) {
    await prisma.brand.create({
      data: {
        name: brand.name,
        country: brand.country,
        logoUrl: brand.logoUrl,
        cars: {
          create: brand.cars.map((car) => ({
            name: car.name,
            year: car.year,
            category: car.category,
            imageUrl: car.imageUrl,
            videoUrl: car.videoUrl,
            history: car.history,
            averagePrice: car.averagePrice,
            specs: {
              create: car.specs,
            },
          })),
        },
      },
    });
  }
}

main()
  .then(async () => {
    console.log("Seed concluido: 5 marcas, 15 carros e 15 fichas tecnicas.");
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
