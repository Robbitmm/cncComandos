var comands = [],
    G = [],
    M = [];

G = [
        "Torno",
        [
            " ",
            ['X_', 'Y_', 'F_', 'R_', 'S_', 'U0', 'W0'],
            ["Coordenada do ponto em <span>X</span>",
            "Coordenada do ponto em <span>Y</span>",
            "Velocidade de avanço <span class='obs'>(mm/volta)</span>",
            "Raio da circunferência",
            "Velocidade de corte",
            "Representante <span>X</span> em incremental",
            "Representante <span>Z</span> em incremental"]
        ],
        [
            "G1",
            ['X_', 'Y_', 'F_'],
        "Interpolação linear com avanço programado"
        ],
        [
            "G2",
            ['X_', 'Y_', 'R_'],
            "Interpolação <span>circular</span>"
        ],
        [
            "G0",
            ['X_', 'Y_'],
            "Interpolação linear <span>rápida</span>"
        ],
        [
            "G2",
            ['X_', 'Y_', 'R_'],
            "Interpolação circular <span>horária</span>"
        ],
        [
            "G3",
            ['X_', 'Y_', 'R_'],
            "Interpolação circular <span>anti-horária</span>"
        ],
        [
            "G4",
            ['*', '*', "*"],
            "Tempo de permanência"
        ],
        [
            "G10",
            ['*', '*', "*"],
            "<span>Ativa</span> o gerenciamento de vida da ferramenta"
        ],
        [
            "G11",
            ['*', '*', "*"],
            "<span>Cancela</span> o gerenciamento de vida da ferramenta"
        ],
        [
            "G20",
            [],
            "Programação em <span>polegadas</span>"
        ],
        [
            "G21",
            [],
            "Programação em <span>milímetros</span>"
        ],
        [
            "G28",
            ['U0', 'W0'],
            "Retorna os eixos para a posição de referência"
        ],
        [
            "G33",
            [],
            "Interpolação com rosca"
        ],
        [
            "G37",
            [],
            "Compensação automática de <span>desgaste da ferramenta</span>"
        ],
        [
            "G40",
            [],
            "<span>Cancela</span> a <span>compensação do raio</span> da ponta da ferramenta"
        ],
        [
            "G41",
            [],
            "<span>Compensação do raio</span> da ponta da ferramenta <span class='obs'>(à esquerda)</span>"
        ],
        [
            "G42",
            [],
            "<span>Compensação do raio</span> da ponta da ferramenta <span class='obs'>(à direita)</span>"
        ],
        [
            "G54",
            [],
            "Ativa o <span>primeiro</span> deslocamento do ponto 0 <span>peça</span>"
        ],
        [
            "G55",
            [],
            "Ativa o <span>segundo</span> deslocamento do ponto 0 <span>peça</span>"
        ],
        [
            "G56",
            [],
            "Ativa o <span>terceiro</span> deslocamento do ponto 0 <span>peça</span>"
        ],
        [
            "G57",
            [],
            "Ativa o <span>quarto</span> deslocamento do ponto 0 <span>peça</span>"
        ],
        [
            "G58",
            [],
            "Ativa o <span>quinto</span> deslocamento do ponto 0 <span>peça</span>"
        ],
        [
            "G59",
            [],
            "Ativa o <span>sexto</span> deslocamento do ponto 0 <span>peça</span>"
        ],
        [
            "g63",
            [],
            "Zeramento semi-automático"
        ],
        [
            "G90",
            [],
            "Coordenada em <span>absoluto</span>"
        ],
        [
            "G96",
            ['S_'],
            "Velocidade de corte <span>constante</span>"
        ],
        [
            "G97",
            ['S_'],
            "Programação em <span>RPM direta</span>"
        ]
]

M = [
        "Micelâneas",
        [
            "M0",
            [],
            "Parada programada"
        ],
        [
            "M2",
            [],
            "Fim de programa"
        ],
        [
            "M3",
            [],
            "Sentido <span>anti-horário</span> de rotação do eixo árvore"
        ],
        [
            "M4",
            [],
            "Sentido <span>horário</span> de rotação do eixo árvore"
        ],
        [
            "M5",
            [],
            "Desloga o eixo árvore sem orientação <span class='obs'>(fuso para em qualquer posição)</span>"
        ],
        [
            "M7",
            [],
            "<span>Liga</span> o óleo solúvel <span class='obs'>(alta pressão)</span>"
        ],
        [
            "M8",
            [],
            "<span>Liga</span> o óleo solúvel <span class='obs'>(baixa pressão)</span>"
        ],
        [
            "M9",
            [],
            "<span>Desliga</span> o óleo solúvel"
        ],
        [
            "M24",
            [],
            "<span>Abre</span> a placa de fixação"
        ],
        [
            "M25",
            [],
            "<span>Fecha</span> a placa de fixação"
        ],
        [
            "M26",
            [],
            "<span>Recua</span> o mangote da contra ponta"
        ],
        [
            "M27",
            [],
            "<span>Avança</span> o mangote da contra ponta"
        ],
        [
            "M30",
            [],
            "Fim de programa"
        ],
]

comands.push(G, M);