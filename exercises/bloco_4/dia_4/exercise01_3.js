let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

info.recorrente = "Sim";
for (key in info) {
    console.log(key); // Showing only the properties names instead of their value.
}
