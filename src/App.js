import { Component } from "react";
import "./App.css";
import { MainMenu } from "./components/MainMenu/MainMenu";
import { NavMenu } from "./components/NavMenu/NavMenu";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { ArticlesMenu } from "./components/ArticleMenu/ArticlesMenu";
import { ImagesBar } from "./components/ImagesBar/ImagesBar";
import { SectionMenu } from "./components/SectionMenu/SectionMenu"

export class App extends Component {
  state = {
    menuItems: [
      { title: 'Nossa História', link: 'historia' },
      { title: 'Produtos', link: 'produtos' },
      { title: 'Encomendas', link: 'encomendas' },
      { title: 'Orçamentos', link: '/#orcamentos' },
    ],
    imagesItems: [
      { title: 'Imagem Aqui', link: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.itdg.com.br%2Ftdg%2Fimages%2Frecipes%2F000%2F000%2F023%2F323619%2F323619_original.jpg%3Fw%3D1200&imgrefurl=https%3A%2F%2Fwww.tudogostoso.com.br%2Freceita%2F23-bolo-de-cenoura.html&tbnid=xTXzQdyC-ggR_M&vet=12ahUKEwjip7SPieztAhXRNLkGHZqKA0AQMygCegUIARD8AQ..i&docid=Bts08gmQ747VNM&w=1200&h=675&itg=1&q=bolo%20de%20cenoura&ved=2ahUKEwjip7SPieztAhXRNLkGHZqKA0AQMygCegUIARD8AQ'},
      { title: 'Outra imagem aqui', link: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FfWu3QfioCeM%2Fmaxresdefault.jpg&imgrefurl=https%3A%2F%2Fm.youtube.com%2Fwatch%3Fv%3DfWu3QfioCeM&tbnid=WbbACmgFdCuEkM&vet=12ahUKEwjGya3PieztAhUmKLkGHR2DAPEQMygCegUIARDpAQ..i&docid=pnXfEn7e-Az-tM&w=1280&h=720&q=torta%20de%20lim%C3%A3o&ved=2ahUKEwjGya3PieztAhUmKLkGHR2DAPEQMygCegUIARDpAQ'}
    ],
    sectionItems: [
      { title: 'Bolo de abacaxi', link: 'https://www.tudogostoso.com.br/receita/119474-bolo-de-abacaxi-caramelizado-muito-simples.html' },
      { title: 'Bolo de maçã', link: 'https://www.tudogostoso.com.br/receita/109535-bolo-de-maca-de-liquidificador-o-melhor-do-mundo.html' },
      { title: 'Bolo de banana', link: 'https://www.tudogostoso.com.br/receita/119737-bolo-de-banana-rapido-de-liquidificador.html' },
    ],
  }

  render() {
    return (
      <>
        <header className="main-header">
          <div className="main-logo">
            <h1>Atelier dos Doces</h1>
          </div>

          <div className="header-info">
            <MainMenu />
            <SearchBar />
          </div>
        </header>

        <NavMenu items={this.state.menuItems} />

        <ImagesBar items={this.state.imagesItems} />

        <article>
          <div className="article-info">
            <ArticlesMenu />
          </div>
        </article>

        <SectionMenu items={this.state.sectionItems} />

      </>
    );
  }
}
