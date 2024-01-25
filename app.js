(() => {
    const $textInput = document.querySelector('#text-input');
    const $output = document.querySelector('#output');
    const $encriptButton = document.querySelector('#encript-button');
    const $decriptButton = document.querySelector('#decript-button');


    /**
     * Function to reset output text and show default text
     */
    const resetOutput = () => {
        $output.innerHTML = `
        <img 
            src="./public/not-found.svg"
            alt="person with a magnifying glass looking at a diamond"
            class="not-found" />
        <h3> Ning&uacuten mensaje fue encontrado </h3>
        <p class="sub-text">Ingresa el texto que desees encriptar o desencriptar.</p>
        `
    }

    /**
     * 
     * @param {string} text Input text to show in output with copy button
     */
    const showOutput = (text) => {
        $output.textContent = ''
        const convertedContainer = document.createElement('div');
        convertedContainer.className = 'converted-container'
        const textElement = document.createElement('p');
        textElement.className = 'converted'
        textElement.textContent = text;
        const copyButton = document.createElement('button');
        copyButton.className = 'copy';
        copyButton.textContent = 'Copiar';

        copyButton.addEventListener('click', () => {
            navigator.clipboard.writeText(text)
        })
        convertedContainer.append(textElement, copyButton)
        $output.appendChild(convertedContainer)
    }

    /**
     *  Function to encript text using specific algorithm 
     *  keys = {e: enter,
     *          i: imes,
     *          a: ai,
     *          o: ober,
     *          u: ufat}
     * @param {string} textToEncrypt text to encrypt
     * @returns {string} encrypted text
     */
    const encryptText = (textToEncrypt) => {
        const keys = {
            e: 'enter',
            i: 'imes',
            a: 'ai',
            o: 'ober',
            u: 'ufat'
        }
        for (const key in keys) {
            textToEncrypt = textToEncrypt.replace(new RegExp(key, 'g'), keys[key])
        }
        return textToEncrypt;
    }


    /**
     * 
     * @param {text} textToDecrypt 
     * @returns 
     */
    const decryptText = (textToDecrypt) => {
        const keys = {
            enter: 'e',
            imes: 'i',
            ai: 'a',
            ober: 'o',
            ufat: 'u'
        }
        for (const key in keys) {
            textToDecrypt = textToDecrypt.replace(new RegExp(key, 'g'), keys[key])
        }
        return textToDecrypt;
    }

    /**
     * Event to reset output text
     */
    $encriptButton.addEventListener('click', () => {
        const text = $textInput.value.trim()
        if (text.length === 0) {
            return resetOutput()
        }
        showOutput(encryptText(text))
    })
    /**
     * Event to reset output text
     */
    $decriptButton.addEventListener('click', () => {
        const text = $textInput.value.trim()
        if (text.length === 0) {
            return resetOutput()
        }
        showOutput(decryptText(text))
    })
})()

