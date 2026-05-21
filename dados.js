/*
  Banco de conteúdo do mini curso.
  Para adicionar novas áreas, copie o objeto "dormente-concreto", altere id, area, document, flashcards e quiz.
  O site soma automaticamente as áreas quando o usuário escolhe "Todas as áreas".
*/
const TRAINING_DATA = [
  {
    id: 'dormente-concreto',
    area: 'Dormente de concreto',
    shortName: 'Dormentes',
    document: 'PO-SPE-160 R1',
    sourceLabel: 'Inspeção de Dormente de Concreto para Reparo e Refugo em Fábrica e Pátio',
    flashcards: [
      {
        category: 'Objetivo',
        front: 'Qual é o objetivo principal do procedimento PO-SPE-160?',
        back: 'Estabelecer critérios técnicos para inspeção de dormentes de concreto, indicando quando há possibilidade de reparo superficial e quando a peça deve ser rejeitada/refugada para preservar segurança, desempenho e conformidade.'
      },
      {
        category: 'Aplicação',
        front: 'Quem deve aplicar este procedimento na rotina da Rumo?',
        back: 'Colaboradores da Qualidade de Materiais, Operação de Via e Modernização que atuam com aplicação e manutenção de dormentes de concreto ao longo da ferrovia.'
      },
      {
        category: 'Ferramentas',
        front: 'Você vai iniciar a inspeção visual de dormentes novos. Quais instrumentos de medição precisa ter em mãos?',
        back: 'Trena, fissurômetro ou lupa para medir fissuras, e paquímetro. Esses instrumentos apoiam a medição de vazios, quebras, fissuras e dimensões relevantes.'
      },
      {
        category: 'Eixos de medição',
        front: 'Na metodologia do eixo, o que significam X, Y e Z?',
        back: 'X representa o comprimento, Y representa a altura e Z representa a profundidade. Essa padronização evita interpretações diferentes durante a medição.'
      },
      {
        category: 'Reparo',
        front: 'Um dormente é passível de reparo superficial. Que tipo de material deve ser priorizado?',
        back: 'Material adequado, preferencialmente à base cimentícia ou similar validado com o fornecedor e a Rumo, sem comprometer mecanicamente o elemento e sem gerar risco à durabilidade.'
      },
      {
        category: 'Reparo',
        front: 'Após aplicar material cimentício de reparo, qual cuidado evita fissuração e desplacamento prematuro?',
        back: 'Proteger o reparo jovem dos raios solares, garantir processo de cura e evitar movimentação imediata até o material adquirir resistência suficiente para transporte ou deslocamento.'
      },
      {
        category: 'Região do trilho',
        front: 'Na área de apoio do trilho, há até 3 pequenos vazios com profundidade ≤2 mm, comprimento ≤3 mm e largura ≤3 mm. Qual é a decisão?',
        back: 'Aceitar. Essas irregularidades estão dentro dos limites de aceitação para pequenos vazios na região de apoio do trilho.'
      },
      {
        category: 'Região do trilho',
        front: 'Na região do trilho, existem até 3 vazios com profundidade entre >3 e ≤5 mm, comprimento entre >4 e ≤10 mm e largura entre >4 e ≤10 mm. Qual é a decisão?',
        back: 'Reparar conforme o procedimento de reparo superficial. A ocorrência já passou do limite de aceitação, mas ainda está dentro da faixa reparável.'
      },
      {
        category: 'Região do trilho',
        front: 'Na região de apoio do trilho, uma única medida do vazio ultrapassou o limite de aceitação. O que fazer?',
        back: 'Aplicar a próxima condição. A nota das tabelas orienta que, se apenas uma das medidas for excedida, deve-se passar para a condição seguinte.'
      },
      {
        category: 'Região do trilho',
        front: 'Na área do trilho, o vazio tem profundidade >6 mm, comprimento >11 mm ou largura >11 mm. Qual é a classificação?',
        back: 'Grande vazio não reparável. O dormente deve ser refugado sem reparo.'
      },
      {
        category: 'Fora da região do trilho',
        front: 'Fora da região do trilho, microbolhas ou pequenos vazios superficiais são sempre motivo de rejeição?',
        back: 'Não. São toleráveis se não estiverem concentrados/coalescidos e se respeitarem os limites dimensionais estabelecidos.'
      },
      {
        category: 'Fora da região do trilho',
        front: 'Fora da região do trilho, há no máximo 3 vazios com profundidade, comprimento e altura ≤5 mm. Qual é a decisão?',
        back: 'Aceitar. Essa condição está dentro do limite de aceitação para vazios fora da região do trilho.'
      },
      {
        category: 'Fora da região do trilho',
        front: 'Fora da região do trilho, os vazios têm profundidade >6 e ≤10 mm, comprimento >6 e ≤20 mm, altura >6 e ≤20 mm, com no máximo 5 vazios. Qual é a decisão?',
        back: 'Reparar. Essa é a faixa reparável para vazios fora da região do trilho.'
      },
      {
        category: 'Fora da região do trilho',
        front: 'Qual gabarito deve ser usado para inspecionar vazios no concreto fora da região do trilho?',
        back: 'Um gabarito quadrado de 100 mm x 100 mm, usado para avaliar a distribuição e as dimensões dos vazios na área inspecionada.'
      },
      {
        category: 'Bolhas alveoladas',
        front: 'O fiscal encontra grandes vazios do tipo bolhas alveoladas em dormente protendido. Pode reparar?',
        back: 'Não. Grandes vazios/bolhas alveoladas não são permitidos, inclusive em peças já reparadas. A peça deve ser rejeitada/refugada por risco à integridade estrutural e durabilidade.'
      },
      {
        category: 'Testeira',
        front: 'Na testeira, há exposição do fio da armadura por vazio com até 30 mm de profundidade. Qual é a decisão?',
        back: 'É tolerável para reparo. Acima disso, a condição muda para refugo conforme o limite de exposição do fio.'
      },
      {
        category: 'Testeira',
        front: 'Na testeira, há exposição de um fio da armadura igual ou superior a 31 mm. Qual é a decisão?',
        back: 'Refugar o dormente. Essa exposição ultrapassa o limite tolerável para reparo em vazios na testeira.'
      },
      {
        category: 'Testeira',
        front: 'Há grande vazio na testeira sem aço exposto, com profundidade de até 50 mm. Qual é a decisão?',
        back: 'Reparar, desde que esteja dentro dos demais critérios aplicáveis. Vazio na testeira sem aço exposto acima de 51 mm deve ser refugado.'
      },
      {
        category: 'Testeira',
        front: 'O vazio da testeira se propaga para a lateral. Até que limite a peça ainda pode receber reparo?',
        back: 'Até 50 mm de continuidade/propagação é tolerável para reparo. Passando de 51 mm, o dormente deve ser refugado.'
      },
      {
        category: 'Quebras laterais/superiores',
        front: 'Quebra lateral ou superior fora da região do trilho, sem aço exposto, com profundidade ≤10 mm, comprimento ≤49 mm e altura ≤29 mm. Qual é a decisão?',
        back: 'Aceitar. A ocorrência está dentro dos limites de aceitação para quebras laterais e superiores sem aço exposto.'
      },
      {
        category: 'Quebras laterais/superiores',
        front: 'Quebra lateral/superior sem aço exposto com profundidade >10 e ≤20 mm, comprimento >50 e ≤200 mm, altura >30 e ≤150 mm. Qual é a decisão?',
        back: 'Reparar. A ocorrência está na faixa reparável para quebras laterais e superiores fora da região do trilho.'
      },
      {
        category: 'Aço exposto',
        front: 'Uma quebra, mesmo dentro de dimensão aparentemente pequena, expôs aço da armadura. O que deve ser feito?',
        back: 'Refugar o dormente. O procedimento registra que, caso a quebra exponha o aço da armadura, o dormente será refugado.'
      },
      {
        category: 'Quebra na testeira',
        front: 'Quebra na testeira sem aço exposto com profundidade >11 e ≤50 mm, comprimento >50 e ≤100 mm, altura >30 e ≤100 mm. Qual é a decisão?',
        back: 'Reparar. Essa é a faixa de reparo para quebras na testeira sem exposição de armadura.'
      },
      {
        category: 'Quebra na testeira',
        front: 'A quebra na testeira, sem aço exposto, aparece junto com quebra lateral. Quando ainda pode ser reparada?',
        back: 'Quando a quebra lateral associada estiver até no máximo 100 mm de comprimento/altura. Acima desse limite, a peça deve ser refugada.'
      },
      {
        category: 'Testeira com aço',
        front: 'Quebra na testeira com exposição do fio de protensão pode receber reparo?',
        back: 'Não. O procedimento não permite reparo para quebra na testeira com aço exposto. Para segregação futura C2, considera-se exposição até 20 mm; igual ou superior a 21 mm é refugo sem C2.'
      },
      {
        category: 'Fissuras',
        front: 'Há fissura no concreto ao redor da ombreira. Qual é a decisão?',
        back: 'Refugar o dormente. Fissura ao redor da ombreira não permite reparo.'
      },
      {
        category: 'Fissuras',
        front: 'A fissura na testeira passa pelos fios de protensão, independentemente da espessura e do comprimento. Qual é a decisão?',
        back: 'Não é permitido reparo. O dormente deve ser refugado.'
      },
      {
        category: 'Fissura longitudinal',
        front: 'Fissura longitudinal lateral sem atingir o aço: espessura ≤0,10 mm e comprimento ≤10 mm. Qual é a decisão?',
        back: 'Aceitar. Está dentro do limite de aceitação da tabela de fissuras longitudinais sem atingir o aço.'
      },
      {
        category: 'Fissura longitudinal',
        front: 'Fissura longitudinal lateral sem atingir o aço: espessura >0,15 e ≤0,50 mm, comprimento >11 e ≤100 mm. Qual é a decisão?',
        back: 'Reparar conforme item 6.3. A fissura não atinge o aço e está na faixa reparável.'
      },
      {
        category: 'Fissura longitudinal',
        front: 'Fissura longitudinal lateral sem atingir o aço com espessura ≥0,55 mm ou comprimento >101 mm. Qual é a decisão?',
        back: 'Refugar imediatamente, pois excede o limite de reparo para fissuras longitudinais sem atingir aço.'
      },
      {
        category: 'Fissura transversal/autógena',
        front: 'No lote há fissura transversal de retração/autógena com espessura >0,55 mm. Qual é a decisão?',
        back: 'Refugar imediatamente o dormente com essa fissura.'
      },
      {
        category: 'Fissura transversal/autógena',
        front: 'A fissura transversal/autógena tem espessura ≤0,50 mm. Qual é o procedimento de verificação?',
        back: 'Separar 2 dormentes com as fissuras para ensaios de momentos fletores positivo/negativo no centro e na região do trilho. A fissura não pode se propagar em espessura ou comprimento; se não aprovar, refugiar.'
      },
      {
        category: 'Fios de protensão',
        front: 'Quais tolerâncias de posicionamento dos fios de protensão devem ser respeitadas?',
        back: 'Posicionamento vertical das armaduras ativas: ±3 mm. Posicionamento horizontal: ±6 mm.'
      },
      {
        category: 'Fios de protensão',
        front: 'Um fio de protensão está fora da tolerância vertical ou horizontal do projeto. O dormente pode ser liberado?',
        back: 'Não. Qualquer fio fora dos limites especificados gera refugo, sem permissão de utilização ou liberação.'
      },
      {
        category: 'Palmilha USP',
        front: 'Qual distância a palmilha USP deve manter dos bordos do dormente na lateral e na testeira?',
        back: 'De 5 mm a 25 mm dos bordos, para evitar que a palmilha seja arrancada durante a socaria do lastro.'
      },
      {
        category: 'Palmilha USP',
        front: 'A palmilha USP ficou com distância de bordo menor que 5 mm. O que fazer?',
        back: 'Realizar corte da palmilha USP para correção, conforme indicado no procedimento.'
      },
      {
        category: 'Palmilha USP',
        front: 'A palmilha USP ultrapassou o bordo do dormente. Qual é a destinação?',
        back: 'Separar para futuro dormente C2. Dormentes fora das medidas descritas devem ser segregados para essa destinação.'
      },
      {
        category: 'Palmilha USP',
        front: 'Qual é o adensamento mínimo do elastômero da palmilha USP no concreto fresco?',
        back: 'Além da camada de conexão, deve haver no mínimo 2 mm do elastômero adensado.'
      },
      {
        category: 'Reparo USP',
        front: 'A USP foi danificada no manuseio. Qual é a primeira etapa do reparo?',
        back: 'Remover completamente a palmilha USP danificada. Se a remoção causar dano no dormente, tratar a avaria conforme os critérios do procedimento.'
      },
      {
        category: 'Reparo USP',
        front: 'Após remover a USP danificada, como preparar a superfície para receber o novo elemento?',
        back: 'Realizar lixamento da área para garantir superfície regular, nivelada e adequada à instalação da nova palmilha.'
      },
      {
        category: 'Reparo USP',
        front: 'Depois da limpeza e aplicação do agente de aderência, quando o dormente pode ser liberado?',
        back: 'Após a secagem completa do material aplicado, com inspeção da equipe de Qualidade da Rumo. Quando necessário, realizar ensaio de arrancamento para verificar a eficiência do reparo.'
      }
    ],
    quiz: [
      {
        question: 'Quais instrumentos são listados para a inspeção de dormentes de concreto?',
        options: ['Trena, fissurômetro ou lupa para medir fissuras, e paquímetro', 'Prumo, nível óptico, termômetro e martelete', 'Tacômetro, goniômetro, dinamômetro e nível laser', 'Apenas inspeção visual, sem instrumento'],
        answer: 0,
        explanation: 'O procedimento lista trena, fissurômetro ou lupa para medir fissuras, e paquímetro.'
      },
      {
        question: 'Na metodologia de eixos do procedimento, o eixo Z corresponde a:',
        options: ['Comprimento', 'Altura', 'Profundidade', 'Largura do boleto'],
        answer: 2,
        explanation: 'X é comprimento, Y é altura e Z é profundidade.'
      },
      {
        question: 'Na área de apoio do trilho, um vazio com profundidade entre >3 e ≤5 mm, comprimento entre >4 e ≤10 mm e largura entre >4 e ≤10 mm, com no máximo 3 vazios, deve ser:',
        options: ['Aceito sem ação', 'Reparado', 'Liberado apenas com pintura', 'Refugado sempre, sem avaliar dimensão'],
        answer: 1,
        explanation: 'Essa é a faixa indicada para reparo em vazios na região de apoio do trilho.'
      },
      {
        question: 'Grandes vazios do tipo bolhas alveoladas em dormente protendido devem ser:',
        options: ['Aceitos quando estiverem fora da região do trilho', 'Reparados com qualquer argamassa disponível', 'Rejeitados/refugados, inclusive em peças reparadas', 'Aprovados se a superfície for lixada'],
        answer: 2,
        explanation: 'Bolhas alveoladas não são permitidas, pois podem comprometer integridade estrutural e durabilidade.'
      },
      {
        question: 'Na testeira, a exposição de um fio da armadura por vazio com profundidade igual ou superior a 31 mm leva a qual decisão?',
        options: ['Aceitação', 'Reparo obrigatório', 'Refugo do dormente', 'Apenas registro fotográfico'],
        answer: 2,
        explanation: 'Exposição igual ou superior a 31 mm é motivo de refugo.'
      },
      {
        question: 'Caso uma quebra exponha aço da armadura, a decisão correta é:',
        options: ['Reparar e liberar', 'Refugar o dormente', 'Cortar apenas a área quebrada', 'Aguardar 24 horas e reinspecionar'],
        answer: 1,
        explanation: 'A nota do procedimento estabelece que, se a quebra expõe o aço da armadura, o dormente será refugado.'
      },
      {
        question: 'Fissura no concreto ao redor da ombreira deve ser tratada como:',
        options: ['Ocorrência aceitável', 'Reparo superficial simples', 'Refugo, sem permissão de reparo', 'Apenas C2 automático'],
        answer: 2,
        explanation: 'Fissura ao redor da ombreira não permite reparo; o dormente deve ser refugado.'
      },
      {
        question: 'As tolerâncias gerais de posicionamento dos fios de protensão são:',
        options: ['±1 mm vertical e ±1 mm horizontal', '±3 mm vertical e ±6 mm horizontal', '±6 mm vertical e ±3 mm horizontal', '±10 mm vertical e ±10 mm horizontal'],
        answer: 1,
        explanation: 'O procedimento define ±3 mm para posicionamento vertical e ±6 mm para horizontal.'
      },
      {
        question: 'A palmilha USP deve ficar a que distância dos bordos do dormente?',
        options: ['0 a 5 mm', '5 a 25 mm', '25 a 50 mm', 'Acima de 51 mm'],
        answer: 1,
        explanation: 'A distância especificada é de 5 mm a 25 mm dos bordos na lateral e testeira.'
      },
      {
        question: 'No reparo de USP danificada no manuseio, qual sequência resume corretamente o procedimento?',
        options: ['Pintar a USP, movimentar o dormente e liberar', 'Remover a USP danificada, lixar/preparar a superfície, restaurar quando aplicável, aplicar agente de aderência, instalar nova USP e inspecionar após secagem', 'Cortar o dormente, aplicar óleo e colar a mesma USP', 'Somente fotografar e arquivar'],
        answer: 1,
        explanation: 'Essa sequência reúne as etapas descritas para o reparo de USP danificada no manuseio.'
      }
    ]
  }
];
