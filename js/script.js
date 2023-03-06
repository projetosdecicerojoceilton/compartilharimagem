document.getElementById("whatsapp-share").addEventListener("click", function() {

    
    // Substitua "caminho/para/imagem.jpg" pelo caminho para a imagem que você deseja compartilhar
    var image_url = "../img/jesus.jpg";
  
    // Substitua "descrição da imagem" pela descrição da imagem que você deseja compartilhar
    var image_description = "descrição da imagem";
  
    // Crie o link do WhatsApp com a imagem anexada
    var whatsapp_link = "https://api.whatsapp.com/send?text=" + encodeURIComponent(image_description) + "&amp;attachment=" + encodeURIComponent(image_url);
  
    // Abra a janela do WhatsApp com o link criado
    window.open(whatsapp_link);
  });
  