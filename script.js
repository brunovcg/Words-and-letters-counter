document.getElementById("countButton").onclick = function() {  
    // teu código vai aqui ... 

    let typedText = document.getElementById("textInput").value;

    typedText = typedText.toLowerCase(); 
    // Isto muda todas as letras para minúsculas
    typedText = typedText.replace(/[^a-z'\s]+/g, ""); 
    // Isso se livra de todos os caracteres exceto letras comuns, espaços e apóstrofos. 
    // Iremos aprender mais sobre como usar a função replace numa lição mais à frente.

    const letterCounts = {}; 

    for (let i = 0; i < typedText.length; i++) {
        currentLetter = typedText[i];
        // faça algo com cada letra 
                
        if (letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1; 
         } else { 
            letterCounts[currentLetter]++; }}      

         for (let letter in letterCounts) { 
            const span = document.createElement("span"); 
            const textContent = document.createTextNode("(" + letter + ": " + letterCounts[letter] + "), "); 
            span.appendChild(textContent); 
            document.getElementById("lettersDiv").appendChild(span); 
         }
// ------------------------------LOOP Palavras -----------------
    let words = document.getElementById("textInput").value;

    words = typedText.split(/\s/);    

    const wordCounts = {}; 

    for (let i = 0; i < words.length; i++) {
        currentWord = words[i];
        // faça algo com cada letra 
                
        if (wordCounts[currentWord] === undefined) {
            wordCounts[currentWord] = 1; 
            } else { 
            wordCounts[currentWord]++; }}      

            for (let word in wordCounts) { 
            const span2 = document.createElement("span"); 
            const wordContent = document.createTextNode("(" + word + ": " + wordCounts[word] + "), "); 
            span2.appendChild(wordContent); 
            document.getElementById("wordsDiv").appendChild(span2); 
            }
       

 }

 document.getElementById("zerar").onclick = function() {  

    document.getElementById("lettersDiv").innerHTML = "";
    document.getElementById("wordsDiv").innerHTML = "";
    document.getElementById("textInput").value = "";
    

 }







