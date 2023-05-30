defmodule App.Ctrl.Index do

  import Plug.Conn

  def run(conn) do
    headers = [
      {"content-type", "application/json"},
      {"Access-Control-Allow-Origin", "*"}
    ]

    conn = %{conn | resp_headers: headers }

    response = [
      %{:Preco => 3000, :Nome => "SportContact 7", :Marca => "Continental", :Descricao => "As condições de condução podem mudar em segundos, por isso confie em um pneu que sabe como reagir. Com o nosso desenho adaptativo do da banda de rodagem, a sensação de condução segura será uma constante em estrada seca ou molhada - tanto em vias urbanas, quanto em altas velocidades nas pistas de corrida.", :Imagem => "https://www.conti.com.br/content/dam/conti-tires-cms/continental/b2c/products/plt/Continental__SportContact-7__ProductPicture__30.png"},
      %{:Preco => 21000, :Nome => "MACHXBIB / XM28", :Marca => "MICHELIN", :Descricao => "Valor garantido e versatilidade para tratores de alta potência", :Imagem => "https://aecbmesvcm.cloudimg.io/v7/https://dcadprod.azureedge.net/b2b-experience-production/attachments/clfqi896802uz01ooa7ta9ks3-tyre-michelin-machxbib.max.png" },
      %{:Preco => 769.90, :Nome => "Turanza", :Marca => "Bridgestone", :Descricao => "Pneu de alta performance, desenvolvido para proporcionar maior controle e frenagem em condições adversas, especialmente em pista molhada, oferecendo segurança e conforto ao dirigir.", :Imagem => "https://www.bridgestone.com.br/content/dam/bridgestone/consumer/bst/latam/br/pneu/turanza-t005/turanza-t005-bst.jpg"},
      %{:Preco => 803.00, :Nome => "CHRONO", :Marca => "pirelli", :Descricao => "Um pneu versátil, para viagens curtas ou longas", :Imagem => "https://www.pirelli.com/tyres/car/dynamic/assets/_next/image?url=https%3A%2F%2Fd3nv2arudvw7ln.cloudfront.net%2Fimages%2Fglobal%2F639%2F808%2Fchrono-3-4-1505470062195.jpg&w=3840&q=75" },
      %{:Preco => 406.36, :Nome => "SP TOURING R1", :Marca => "dunlop", :Descricao => "O SP TOURING R1 traz para carros de passeio o melhor custo-benefício do mercado. Com estrutura reforçada, o SP TOURING R1 é uma excelente opção para você rodar sempre tranquilo. Sua banda de rodagem com desenho assimétrico, com desenho interno que auxilia na drenagem da água, e seus sulcos mais largos e profundos proporcionam excelente escoamento de água em situações de aquaplanagem.", :Imagem => "https://dunloppneus.vtexassets.com/arquivos/ids/155711-1600-auto?v=637424487673030000&width=1600&height=auto&aspect=true"}
    ]


    send_resp(conn, 200, Jason.encode!(response))
  end
end
