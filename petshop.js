// módulo próprio


const moment = require('moment');
const fs = require('fs');

let bd = fs.readFileSync('./bd.json', 'utf-8');

bd = JSON.parse(bd)

const petshop = {
    atualizarBanco: () => {
        let petsAtualizado = JSON.stringify(bd, null, 2);
        fs.writeFileSync('bd.json', petsAtualizado, 'utf-8');
    },

    listaPets: () => {
    // lista todos os pets cadastrados.
    
    console.log("Estes são os pets cadastrados:")

    bd.pets.forEach(pet => {
        let {nome, tipo, raca, tutor} = pet
        
        console.log(`Pet: ${nome}, Tipo: ${tipo}, Raça ${raca}, Tutor: ${tutor}`)
        
         
        pet.servicos.forEach( servicosDoPet => {
            let {servico, data} = servicosDoPet;
            console.log(`Serviço: ${servico}, Data/Hora: ${data}`)
        })      
    })
    },

    const buscarPet: PetBuscado => {  
        let encontrado = bd.pets.find(function(pet){
           return pet.nome === PetBuscado;
        });
      
        // return encontrado ? encontrado : `Nenhum pet encontrado com o nome ${Petbuscado}`
        
        if (encontrado) {
        
        console.log(`Pet encontrado, aqui estão as informações de ${PetBuscado}:`);
        console.log(`${PetBuscado} é um ${encontrado.tipo} da raça ${encontrado.raca} que pertence a(o) ${encontrado.tutor} . Hoje enontra-se com ${encontrado.idade} anos e pesa ${encontrado.peso} quilos.`);
        console.log(encontrado.vacinado ? `${PetBuscado} já está vacinado(a).` : `${PetBuscado} ainda não foi vacinado(a).`)
        } else {
            console.log(`${PetBuscado} não encontrado.`)
        }
        
    },
    
    const filtrarTipoPet : tipoPet => {
    
        let filtrados = bd.pets.filter(pet => pet.tipo === tipoPet);
        
        console.log(`Aqui estão todos os pets do tipo ${tipoPet}:`)  
        filtrados.forEach(filtrado => {
            console.log(filtrado.nome)
          
        })
        
    },
    const vacinarPet: pet => {
        // checa se um pet já se encontra vacinado e em caso negativo o vacina.
        if (!pet.vacinado){
            pet.vacinado = true;
            console.log(`${pet.nome} foi vacinado com sucesso!`);
            atualizarBanco();
        } else {
            console.log(`${pet.nome} já estava vacinado.`);
        }
    
    },
    const campanhaVacina: (pets) => { 
        console.log('Campanha de vacina 2021')
        console.log('vacinando...')
    
        let petVacinadosCampanha = 0
    
        bd.pets = bd.pets.map((pet) => {
            if (!pet.vacinado) {
                vacinarPet(pet);
                petVacinadosCampanha++;
            }
    
            return pet;
        })
        
        // const petsNaoVacinados = pets.filter(pets => pets.vacinado === false);
        // console.log(petsNaoVacinados)
        // pets.map(pet => vacinarPet(pet));
        
        console.log(`Pets vacinados nesta campanha campanha: ${petVacinadosCampanha}`);
        },
        
        const adicionarPet: (nome, tipo, idade, raca, peso, tutor, contato, vacinado, servicos) =>{

            novoPet = {
                nome: nome,
                tipo: tipo,
                idade: idade,
                raca: raca,
                peso: peso,
                tutor: tutor,
                contato: contato,
                vacinado: vacinado,
                servicos: servicos
            }
    
    
        bd.pets.push(novoPet);
        atualizarBanco();
        console.log(`${novoPet.nome} foi adicionado com sucesso!`)
        
    },
    const darBanhoPet: (pet) => {
    
        pet.servicos.push({
            servico: "banho",
            data: `${dataAgora()}`
            });
        atualizarBanco();
        console.log(`${pet.nome} tomou banho no dia ${dataAgora()}!`);
        
    },

    const tosarPet: (pet) => {
        
        pet.servicos.push({
            servico: "tosa",
            data: `${dataAgora()}`
            });
        atualizarBanco();
        console.log(`${pet.nome} foi tosado no dia ${dataAgora()}!`);
        
    },          
    
    const apararUnhasPet: (pet) => {
        
        pet.servicos.push({
            servico: "aparar unhas",
            data: `${dataAgora()}`
            });
        atualizarBanco();
        console.log(`${pet.nome} teve suas unhas aparadas em ${dataAgora()}!`);
        
    },
    
    const atenderCliente: (pet, servico) => {
        console.log(`Bem vindo, ${pet.nome}!`);
        servico(pet);
        console.log(`Até logo, ${pet.nome}!`)
    },
    
    const clientePremium: pet => {
    
        let {nome} = pet
    
        let nServicos = pet.servicos.length
        // const totalServicos = pet.servicos.map(x => x = 1);
       
        console.log((nServicos < 3) ? `${nome}! Infelizmente você não é elegível para descontos.` : `CLIENTE PREMIUM - ${nome} você tem direito a desconto.`)
    },
        
    
    const contatoTutor: pet => {
        let {nome, tutor, contato} = pet;
    
        return `Tutor: ${tutor}
                Contato: ${contato}   // adicionar "contato" no bd e na função de inserção
                Pet: ${nome}`;
        
    },
          
    const filtrarTutor: nomeTutor => {
        let petsTutor = bd.pets.filter(pet =>{
            return pet.tutor == nomeTutor;
        });
        console.log(`Pets do tutor ${nomeTutor}:`)
        petsTutor.forEach(pet => {
            console.log(`${pet.nome} - ${pet.tipo}`)
        })
    }


}


module.exports = petshop;