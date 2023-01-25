import prisma from "../src/config/database.js";

async function main() {
    await prisma.cars.createMany({
        data: [
            {
              "model": "HB20",
              "licensePlate": "ABC9090",
              "year": 2001,
              "color": "AZUL",
              "createAt": "2023-01-25T20:52:22.427Z"
            },
            {
              "model": "SONATA",
              "licensePlate": "EZD3035",
              "year": 2010,
              "color": "PRETO",
              "createAt": "2023-01-25T20:52:22.427Z"
            },
            {
              "model": "X1",
              "licensePlate": "FBI2231",
              "year": 2018,
              "color": "BRANCO",
              "createAt": "2023-01-25T20:52:22.427Z"
            },
            {
              "model": "CIVIC",
              "licensePlate": "LPA1019",
              "year": 2021,
              "color": "CINZA",
              "createAt": "2023-01-25T20:52:22.427Z"
            },
            {
              "model": "ONIX",
              "licensePlate": "HFA2713",
              "year": 2023,
              "color": "AMARELO",
              "createAt": "2023-01-25T20:52:22.427Z"
            },
            {
              "model": "EVOLUTION",
              "licensePlate": "EPR6655",
              "year": 2005,
              "color": "CINZA",
              "createAt": "2023-01-25T20:52:22.427Z"
            },
            {
              "model": "UNO",
              "licensePlate": "DMP7935",
              "year": 2000,
              "color": "PRETO",
              "createAt": "2023-01-25T20:52:22.427Z"
            },
            {
              "model": "320i",
              "licensePlate": "LAS5546",
              "year": 2017,
              "color": "BRANCO",
              "createAt": "2023-01-25T20:52:22.427Z"
            }
          ]
    })    
}


main().then(() => {
    console.log("Registros feitos!")
}).catch( (e) =>{
    console.error(e);
    process.exit(1)
}).finally( async() => {
    await prisma.$disconnect()
})