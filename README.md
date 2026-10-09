STLAI Car Configurator

Configurador 3D de carros feito em React Three Fiber para o teste técnico da STLFLIX. Escolha o modelo, troque a pintura e baixe o .glb com a textura ativa em um .zip.

Demo: https://car-configurator-puce.vercel.app/

Stack

React 18, React Three Fiber, drei, three.js, Zustand, Tailwind CSS, JSZip e @react-three/postprocessing, rodando em Vite.

Rodando localmente
bash
npm install
npm run dev

O servidor já sobe liberado na rede local, então dá pra abrir no celular pelo endereço de Network que aparece no terminal.

Build de produção:

bash
npm run build
npm run preview
Dev tools

Ctrl+Shift+D (ou toque com quatro dedos no celular) abre o painel de ajuste da cena e o overlay de performance.