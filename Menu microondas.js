//Mesa 3
// Dayana Miranda, Loyana Jacinto, Thiago Maurat, Isnard Cavalcanti, João Eduardo Eloi 
//1 ͦ Checkpoint de Programação Imperativa!


function esquentar(tempo, prato) {

    /**
     * Menu
     */
    tempo_do_prato = ''
    mensagem = ''
    menu = false

    if (prato == 'pipoca') {
        tempo_do_prato = 10
        menu = true
    }

    if (prato == 'macarrao') {
        tempo_do_prato = 8
        menu = true
    }

    if (prato == 'carne') {
        tempo_do_prato = 15
        menu = true
    }

    if (prato == 'feijao') {
        tempo_do_prato = 12
        menu = true
    }

    if (prato == 'brigadeiro') {
        tempo_do_prato = 8
        menu = true
    }

    // se o prato digitado for diferente de qualquer uma das 5 opções, retorna prato inexistente
    if (menu == false) {
        mensagem = 'prato inexistente'
    }


    /**
     * Condições
     */
    //nesta parte foram feitas as tratativas para cada tempo: tempo padrão, duas vezes maior e 3 vezes maior e tempo insuficiente
    if (menu == true) {
        mensagem = "Prato pronto 🍽, bom apetite 🤤"

        if (tempo > tempo_do_prato * 2) {
            mensagem = "queimou 🔥"
        }

        if (tempo > tempo_do_prato * 3) {
            mensagem = "kabummm 💣"
        }

        if (tempo < tempo_do_prato) {
            mensagem = "tempo insuficiente ⏰"
        }
    }

    //mensagem a ser exibida
    console.log(`${prato} - ${mensagem}`)

}

//testando escolha do prato e tempo
esquentar(50, 'macarrao');