const opciones1 =  [{ nombre: "Excelente", valor: 5 },
{ nombre: "Muy bueno", valor: 4 },
{ nombre: "Bueno", valor: 3 },
{ nombre: "Regular", valor: 2 },
{ nombre: "Deficiente", valor: 1 }];
const opciones2 =   [  { nombre: "Totalmente de acuerdo", valor: 5 },
{ nombre: "De acuerdo", valor: 4 },
{ nombre: "Indeciso", valor: 3 },
{ nombre: "En desacuerdo", valor: 2 },
{ nombre: "Totalmente en desacuerdo", valor: 1 }];
const opciones3 = [ { nombre: "Muy frecuentemente", valor: 5 },
{ nombre: "Frecuentemente", valor: 4 },
{ nombre: "Ocasionalmente", valor: 3 },
{ nombre: "Raramente", valor: 2 },
{ nombre: "Nunca", valor: 1 }];
export const cuestionarios = [
 {
        id: 1,
        nombre: "Primer Instrumento",
        nota: 0,
        finished: false,
        titulo:"PRIMER INSTRUMENTO DE AUTOEVALUACION GERENCIAL: ORIENTADO A LA MANERA EN QUE SE ADMINISTRA",
        objetivo:"COMPRENDER  EL DESARROLLO DE LA ADMINISTRACION ESTABLECIDA ",
        preguntas: [
            {
                pregunta: "La manera que administras las tareas diarias en orden de prioridad es:",
                opciones: opciones1
            },
            {
                pregunta: "Consideras que la operación en las actividades de la empresa se desarrolla de manera eficiente:",
                opciones: opciones2
            },
            {
                pregunta: "Consideras que mantienes el equilibro entre el trabajo y vida personal:",
                opciones: opciones2
            },
            {
                pregunta: "Consideras relevante tomar en cuenta las opiniones de los demás para tomar decisiones importantes:",
                opciones: opciones2
            },
            {
                pregunta: "Consideras que delegas las tareas de manera que sea acorde con los conocimientos del equipo de trabajo:",
                opciones: opciones2
            },
            {
                pregunta: "Sientes que te relacionas de manera positiva con el equipo de trabajo:",
                opciones: opciones2
            },
            {
                pregunta: "Como evaluarías la forma en que el equipo se siente ante las delegaciones de trabajo:",
                opciones: opciones1
            },
            {
                pregunta: "Crees que diriges tus esfuerzos para que todas las personas a tu alrededor se sientan integradas:",
                opciones: opciones2
            },
            {
                pregunta: "Como evaluarías la forma en que optimizas el uso de recursos para administrar de manera oportuna los insumos:",
                opciones: opciones1
            },
            {
                pregunta: "Sientes que organizas reuniones periódicas para fortalecer vínculos laborales orientados a objetivos:",
                opciones: opciones2
            },
            {
                pregunta: "Crees que fomentas la participación para mantener un control de comunicación y un buen ambiente laboral:",
                opciones: opciones2
            },
            {
                pregunta: "Que tan bien consideras que atiendes las dudas del personal:",
                opciones: opciones1
            },
            {
                pregunta: "La manera que gestionas los conflictos internos es:",
                opciones: opciones1
            },
            {
                pregunta: "Sientes que actúas de manera positiva ante problemas y los conviertes en oportunidades futuras:",
                opciones: opciones2
            },
            {
                pregunta: "Consideras que el equipo de trabajo te considera una persona confiable:",
                opciones: opciones2
            },
            {
                pregunta: "Cómo consideras tu capacidad de identificar oportunidades de mejora:",
                opciones: opciones1
            },
            {
                pregunta: "Como evaluarías la forma en que capacitas al personal de nuevo ingreso con puntualidad, realismo y responsabilidad:",
                opciones: opciones1
            },
            {
                pregunta: "Consideras que tomas en cuenta sugerencias que mejoren u optimicen los procesos:",
                opciones: opciones2
            },
            {
                pregunta: "Consideras crucial la forma en que gestionas la prevención de riesgos en las operaciones de la empresa para asegurar la seguridad y el bienestar del equipo:",
                opciones: opciones2
            },
            {
                pregunta: "Cómo evalúas tu capacidad para estimar las probabilidades de fallas en la toma de decisiones:",
                opciones: opciones1
            }
        ]
    }    
    ,
{
        id: 2,
        nombre: "Segundo Instrumento",
        nota: 0,
        finished: false,
        titulo:"SEGUNDO INSTRUMENTO DE AUTOEVALUACION GERENCIAL: ORIENTADO A LA MANERA EN QUE SE GERENCIA",
        objetivo:"CONOCER LA MANERA DE GESTON DE OBJETIVOS Y METAS CON LOS COLABORADORES DEL AREA",
        preguntas: [
            {
                pregunta: "Como evalúas tu enfoque para establecer una visión clara y convincente:",
                opciones: opciones2
            },
            {
                pregunta: "La manera en que direccionas las áreas de mejora es:",
                opciones: opciones1
            },
            {
                pregunta: "La forma en que estableces los objetivos y metas es:",
                opciones: opciones1
            },
            {
                pregunta: "Consideras que demuestras liderazgo al enfrentar y resolver conflictos:",
                opciones: opciones2
            },
            {
                pregunta: "Crees que promueves el desarrollo profesional y el crecimiento del personal en tu equipo:",
                opciones: opciones2
            },
            {
                pregunta: "Te consideras ser un modelo a seguir en términos de integridad, ética y comportamiento profesional:",
                opciones: opciones2
            },
            {
                pregunta: "Consideras que la forma en que manejas los conflictos es:",
                opciones: opciones1
            },
            {
                pregunta: "Sientes que fomentas un ambiente de confianza, colaboración y apoyo mutuo:",
                opciones: opciones2
            },
            {
                pregunta: "Crees que posees la habilidad para coordinar eficazmente las actividades y recursos:",
                opciones: opciones2
            },
            {
                pregunta: "Como evaluarías la forma en que fomentas la participación y la contribución de los miembros de la organización:",
                opciones: opciones1
            },
            {
                pregunta: "Cómo evalúas tu habilidad para gestionar las comunicaciones de manera que sean claras y efectivas:",
                opciones: opciones1
            },
            {
                pregunta: "Como ha sido tu enfoque para mantener y establecer relaciones con una buena comunicación:",
                opciones: opciones1
            },
            {
                pregunta: "Como evalúas el éxito de tu capacidad para coordinar:",
                opciones: opciones1
            },
            {
                pregunta: "Consideras que gestionas los recursos disponibles para optimizar la eficiencia y maximizar los resultados:",
                opciones: opciones2
            },
            {
                pregunta: "Como evalúas tu capacidad para monitorear y evaluar el desempeño:",
                opciones: opciones1
            },
            {
                pregunta: "Como han sido las estrategias de control implementadas a la fecha:",
                opciones: opciones1
            },
            {
                pregunta: "Sientes que abordas la toma de decisiones difíciles:",
                opciones: opciones2
            },
            {
                pregunta: "De qué forma evaluarías tu enfoque para analizar y evaluar alternativas antes de tomar decisiones:",
                opciones: opciones1
            },
            {
                pregunta: "Crees que los resultados de las decisiones que has tomado han sido efectivos:",
                opciones: opciones2
            },
            {
                pregunta: "La habilidad que posees para la toma de decisiones es:",
                opciones: opciones1
            }
        ]
    }
    
    ,
{
        id: 3,
        nombre: "Tercer Instrumento",
        nota: 0,
        finished: false,
        titulo:"TERCER INSTRUMENTO DE AUTOEVALUACION GERENCIAL: ORIENTADO A LA MANERA EN QUE SE DIRIGE",
        objetivo:"COMPRENDER LA MANERA EN LA QUE SE DIRIGEN LAS ACTIVIDADES Y MANEJO DE RECURSOS GERENCIALES",
        preguntas: [
            {
                pregunta: "La manera en que diriges al equipo hacia el cumplimiento de objetivos desafiantes es:",
                opciones: opciones1
            },
            {
                pregunta: "Consideras que asignas responsabilidades de manera equitativa y acorde a las habilidades de cada miembro del equipo:",
                opciones: opciones2
            },
            {
                pregunta: "De qué manera evalúas tu habilidad para fomentar un ambiente de trabajo que promueva la innovación, la colaboración y la excelencia en la ejecución de tareas:",
                opciones: opciones1
            },
            {
                pregunta: "Qué tan efectivamente gestionas los conflictos dentro del equipo, promoviendo un ambiente de respeto y colaboración:",
                opciones: opciones1
            },
            {
                pregunta: "Consideras que utilizas un lenguaje claro y accesible para que todos en el equipo comprendan los mensajes:",
                opciones: opciones2
            },
            {
                pregunta: "Crees que la manera que utilizas canales de comunicación efectivos es:",
                opciones: opciones1
            },
            {
                pregunta: "Consideras que posees la habilidad para transmitir información de manera clara y efectiva a todos los niveles del equipo:",
                opciones: opciones2
            },
            {
                pregunta: "Consideras que fomentas un ambiente de comunicación abierta y honesta en tu equipo:",
                opciones: opciones2
            },
            {
                pregunta: "De que maneras evalúas tu habilidad para encontrar oportunidades que motiven al equipo mediante el desarrollo profesional y personal:",
                opciones: opciones1
            },
            {
                pregunta: "Consideras que fomentas una cultura de aprendizaje y mejora continua, donde los errores se vean como oportunidades de crecimiento:",
                opciones: opciones2
            },
            {
                pregunta: "De qué forma evalúas tu capacidad para inspirar y mantener alta la motivación del equipo hacia el logro de los objetivos organizacionales:",
                opciones: opciones1
            },
            {
                pregunta: "Consideras que posees habilidad para resolver conflictos y promover un ambiente de trabajo armonioso:",
                opciones: opciones2
            },
            {
                pregunta: "Como evaluarías la manera en que resuelves los conflictos y desafíos dentro de la organización:",
                opciones: opciones1
            },
            {
                pregunta: "Consideras que la manera en que lideras promueve un ambiente de confianza y apertura para el equipo:",
                opciones: opciones2
            },
            {
                pregunta: "Cómo evaluarías tu eficiencia al gestionar el tiempo y los recursos para alcanzar los objetivos establecidos:",
                opciones: opciones1
            },
            {
                pregunta: "Como evalúas tu liderazgo ha impulsado la responsabilidad y la rendición de cuentas dentro del equipo:",
                opciones: opciones2
            },
            {
                pregunta: "Crees que abordas de manera rápida y eficaz los problemas y preocupaciones de tu equipo:",
                opciones: opciones2
            },
            {
                pregunta: "De qué manera evalúas tu supervisión en el cumplimiento de los procedimientos y políticas de la empresa:",
                opciones: opciones1
            },
            {
                pregunta: "Consideras que posees la capacidad para establecer y mantener estándares de calidad y productividad en el trabajo:",
                opciones: opciones2
            },
            {
                pregunta: "Consideras que la manera en que supervisas facilita la resolución de problemas y la toma de decisiones:",
                opciones: opciones2
            }
        ]
    }
    
   ,
{
    id: 4,
    nombre: "Cuarto Instrumento",
    nota: 0,
    finished: false,
    titulo:"CUARTO INSTRUMENTO DE AUTOEVALUACION GERENCIAL: ORIENTADO A LA MANERA EN QUE SE LIDERA",
    objetivo:"RECONOCER LA MANERA QUE SE LIDERAN LOS EQUIPOS DE TRABAJO INVOLUCRADOS EN LA ORGANIZACIÓN MEDIANTE UNA CORRECTA COMUNICACIÓN Y ADAPTACION A DIVERSAS SITUACIONES",
    preguntas: [
        {
            pregunta: "Como evalúas el cumplimiento de los objetivos empresariales:",
            opciones: opciones1
        },
        {
            pregunta: "Tu adaptabilidad de liderar según las circunstancias es:",
            opciones: opciones1
        },
        {
            pregunta: "La manera en la que mides el nivel de confianza entre tú y tu equipo es:",
            opciones: opciones1
        },
        {
            pregunta: "Consideras que lideras un ambiente de colaboración entre tu equipo:",
            opciones: opciones2
        },
        {
            pregunta: "Con que frecuencia buscas mejorar tus habilidades de liderazgo:",
            opciones: opciones3
        },
        {
            pregunta: "La forma en la que delegas tareas y responsabilidades es:",
            opciones: opciones1
        },
        {
            pregunta: "La manera en que buscas el bienestar de tu equipo es:",
            opciones: opciones1
        },
        {
            pregunta: "Consideras que la manera en que apoyas a tú equipo en situaciones complicadas es:",
            opciones: opciones1
        },
        {
            pregunta: "Crees que como líder debes evitar sesgos entre tus colaboradores:",
            opciones: opciones2
        },
        {
            pregunta: "Crees que tu manera de liderazgo influye a la hora de tomar decisiones:",
            opciones: opciones2
        },
        {
            pregunta: "Como mides la comunicación con tu equipo de trabajo:",
            opciones: opciones1
        },
        {
            pregunta: "La manera en que mides tu capacidad para solucionar problemas con tu equipo de trabajo es:",
            opciones: opciones1
        },
        {
            pregunta: "Siendo líder, como crees que manejas un ambiente difícil y estresante en situaciones específicas:",
            opciones: opciones1
        },
        {
            pregunta: "Mide que tan bien brindas una orientación adecuada a todos los miembros del equipo:",
            opciones: opciones1
        },
        {
            pregunta: "La manera en la que te expresas a la hora de comunicarte es:",
            opciones: opciones1
        },
        {
            pregunta: "Como sientes que es tu límite entre lo personal y lo profesional:",
            opciones: opciones1
        },
        {
            pregunta: "La manera en la que sientes que lideras los aspectos participativos de tus colaboradores es:",
            opciones: opciones1
        },
        {
            pregunta: "La manera en la que percibes tu liderazgo dentro de la organización es:",
            opciones: opciones1
        },
        {
            pregunta: "La decisión que tomas como líder para corregir algún comportamiento no apropiado es:",
            opciones: opciones1
        },
        {
            pregunta: "En un entorno laboral, liderando un equipo, manejas la responsabilidad de una manera:",
            opciones: opciones1
        }
    ]
}

    ,
     {
        id: 5,
        nombre: "Quinto Instrumento",
        nota: 0,
        finished: false,
        titulo:"QUINTO INSTRUMENTO DE AUTOEVALUACION GERENCIAL: ORIENTADO A LA MANERA EN QUE SE GESTIONA",
        objetivo:"FOMENTAR LA MEJORA CONTINUA Y EL DESARROLLO DE UNA BUENA ADMINISTRACION POR PARTE DE LOS GERENTES DE LA ORGANIZACIÓN",
        preguntas: [
            {
                pregunta: "Qué nivel de efectividad tengo para fomentar un ambiente de trabajo colaborativo y de apoyo:",
                opciones: opciones1
            },
            {
                pregunta: "Crees que resuelves los conflictos dentro del equipo de trabajo de manera justa y equitativa:",
                opciones: opciones2
            },
            {
                pregunta: "En qué medida califica su habilidad para establecer metas claras y alcanzables para su equipo de trabajo:",
                opciones: opciones1
            },
            {
                pregunta: "Cómo evalúa el aprovechamiento de las oportunidades de mejora dentro del equipo de trabajo:",
                opciones: opciones1
            },
            {
                pregunta: "Consideras que administras los recursos disponibles para lograr los objetivos de tu equipo de trabajo:",
                opciones: opciones2
            },
            {
                pregunta: "La manera en que gestiona el tiempo y las prioridades de su equipo de trabajo es:",
                opciones: opciones1
            },
            {
                pregunta: "Como evalúas la forma en que muestras empatía hacia los miembros de tu equipo de trabajo en situaciones difíciles:",
                opciones: opciones1
            },
            {
                pregunta: "Sientes que gestionas el rendimiento individual y grupal de tu equipo de trabajo:",
                opciones: opciones2
            },
            {
                pregunta: "Consideras que manejas las crisis que surgen en el entorno laboral de tu equipo de trabajo:",
                opciones: opciones2
            },
            {
                pregunta: "Qué tan bien se adapta a los cambios en el entorno laboral:",
                opciones: opciones1
            },
            {
                pregunta: "Crees que manejas las relaciones con otros departamentos o áreas de la organización para el alcance de los objetivos de tu equipo de trabajo:",
                opciones: opciones2
            },
            {
                pregunta: "Sientes que promueves un clima laboral inclusivo dentro de tu equipo de trabajo:",
                opciones: opciones2
            },
            {
                pregunta: "Sientes que fomentas una buena comunicación y transparencia dentro de tu equipo de trabajo:",
                opciones: opciones2
            },
            {
                pregunta: "Consideras que realizas una buena gestión cuando surgen desacuerdos o discrepancias de opinión dentro de tu equipo de trabajo:",
                opciones: opciones2
            },
            {
                pregunta: "Consideras que sueles identificar y resolver las barreras que afectan el desempeño de tu equipo:",
                opciones: opciones2
            },
            {
                pregunta: "Qué tan efectivamente promueve la colaboración entre los miembros de tu equipo de trabajo y otros departamentos de la organización:",
                opciones: opciones1
            },
            {
                pregunta: "La forma en que gestionas la delegación de tareas entre los miembros de tu equipo de trabajo es:",
                opciones: opciones1
            },
            {
                pregunta: "Qué tan efectivamente comunicas las expectativas y cambios a tu equipo de trabajo:",
                opciones: opciones1
            },
            {
                pregunta: "Cómo calificas tu habilidad para mantener un equilibrio entre la autoridad y la participación del equipo en la toma de decisiones:",
                opciones: opciones1
            },
            {
                pregunta: "En qué medida califica su habilidad para el manejo de conflictos entre los miembros del equipo:",
                opciones: opciones1
            }
        ]
    }
    
];
