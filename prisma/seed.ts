import prisma from "../src/config/database.js";

async function main() {
    await prisma.cars.createMany({
        data: [
            {
                "model": "HB20",
                "licensePlate": "ABC9090",
                "year": "2001",
                "color": "AZUL",
                "createAt": "2023-01-25T19:31:23.469Z"
              },
              {
                "model": "SONATA",
                "licensePlate": "EZD3035",
                "year": "2010",
                "color": "PRETO",
                "createAt": "2023-01-25T19:31:23.469Z"
              },
              {
                "model": "X1",
                "licensePlate": "FBI2231",
                "year": "2018",
                "color": "BRANCO",
                "createAt": "2023-01-25T19:31:23.469Z"
              },
              {
                "model": "CIVIC",
                "licensePlate": "LPA1019",
                "year": "2021",
                "color": "CINZA",
                "createAt": "2023-01-25T19:31:23.469Z"
              },
              {
                "model": "ONIX",
                "licensePlate": "HFA2713",
                "year": "2023",
                "color": "AMARELO",
                "createAt": "2023-01-25T19:31:23.469Z"
              },
              {
                "model": "EVOLUTION",
                "licensePlate": "EPR6655",
                "year": "2005",
                "color": "CINZA",
                "createAt": "2023-01-25T19:31:23.469Z"
              },
              {
                "model": "UNO",
                "licensePlate": "DMP7935",
                "year": "2000",
                "color": "PRETO",
                "createAt": "2023-01-25T19:31:23.469Z"
              },
              {
                "model": "SAVEIRO",
                "licensePlate": "AKI8877",
                "year": "2010",
                "color": "CINZA",
                "createAt": "2023-01-25T19:31:23.469Z"
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