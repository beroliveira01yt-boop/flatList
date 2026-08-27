import { Background } from '@react-navigation/elements';
import {View, StyleSheet, FlatList, Image} from 'react-native';
import Filme from './filme';

const categorias = [
  {
    id: "1",
    titulo: "Em Alta",
    filmes: [
      { id: "1a", titulo: "Oppenheimer", cor: "#1a1a2e", imagem:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/5c3c44212930411.673d9fef7aad7.jpg", href:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/5c3c44212930411.673d9fef7aad7.jpg" },
      { id: "1b", titulo: "Duna 2", cor: "#16213e", imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcrdf5O1qC_1H-8_Maf1tFhlIGilNWhAsY1uRsrzNJKw&s=10"  },
      { id: "1c", titulo: "Barbie", cor: "#0f3460", imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3dYF5Ger5WxMEGMpJlgorZRFUL-J253-SMU6VkxQJFw&s=10"  },
      { id: "1d", titulo: "Poor Things", cor: "#533483", imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxeNlDnmQ8dGJRUAWNjpfhEu9UZhv-Drp46puJiDPdBQ&s=10"  },
      { id: "1e", titulo: "Saltburn", cor: "#2b2d42", imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRehFvatWW7PTyOI738MAbSAbBIq_uJTog_iHJdXGGgnQ&s=10"  },
    ],
  },
  {
    id: "2",
    titulo: "Ação",
    filmes: [
      { id: "2a", titulo: "John Wick 4", cor: "#1b1b2f", imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNTD8oaJSx7mHmjq_sWFEyzaxzEviN36zkyLizOfszzQ&s=10"  },
      { id: "2b", titulo: "Missão Impossível", cor: "#162447", imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPGHI5jzqC5rPm6hPf-Dhw4C9xeJn6f94B80saV6URKA&s"  },
      { id: "2c", titulo: "Top Gun", cor: "#1f4068", imagem:"https://upload.wikimedia.org/wikipedia/pt/thumb/d/d2/Top_Gun_Maverick.jpg/250px-Top_Gun_Maverick.jpg?utm_source=pt.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"  },
      { id: "2d", titulo: "Mad Max", cor: "#1b262c", imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmjPbrNHJRpzhRN31Qy-j7h5SJBveN9yqSysqumYgcqA&s"  },
    ],
  },
  {
    id: "3",
    titulo: "Comédia",
    filmes: [
      { id: "3a", titulo: "Superbad", cor: "#2d132c", imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjdb7vA74Sh7YAcaWiFs-HfhzIS9x86wxbFeJBVUzKpA&s=10"  },
      { id: "3b", titulo: "The Grand Budapest", cor: "#1c3334", imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDGKyWR9G3l7O4Z8Us5P2Gqt_sjH7EwzDEXk9ItFw9QQ&s=10"  },
      { id: "3c", titulo: "Knives Out", cor: "#2c003e", imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR11SoDajmIc04if_1xtsAxizT3KcyJsEdkGCqVP8jDQ&s=10"  },
    ],
  },
  {
    id: "4",
    titulo: "Documentários",
    filmes: [
      { id: "4a", titulo: "Free Solo", cor: "#0d0d0d", imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDYyYYjpVBOVHDsLBh1IZLgGuk3mBCw_NKQrhAyz-81g&s=10"  },
      { id: "4b", titulo: "The Social Dilemma", cor: "#001011", imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuUO1Rwdt2Ho08DlxEYf40EdaIQz4YyPMdlfOkI5o0hg&s=10"  },
      { id: "4c", titulo: "My Octopus Teacher", cor: "#002b36", imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS82JskoQJhk_OFoixajWiydt04yiN-O8Agpsyxjo-FAQ&s=10"  },
    ],
  },
  {
    id: "5",
    titulo: "Terror",
    filmes: [
      { id: "5a", titulo: "Hereditary", cor: "#200122", imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmsY44pVWoq_zBbrtTWPqrVZKE9DUsbuib85CoVbqAYg&s=10"  },
      { id: "5b", titulo: "Midsommar", cor: "#190a05", imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7pW-De6tsvVTDwSuMazu37L8YlZ50lwm4YiaxclruJw&s=10"  },
      { id: "5c", titulo: "Get Out", cor: "#0a0a0a", imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcaMyV0lU9qD4q8SoaA9Z2bKw2tKJaejciKkiLlccrKA&s=10"  },
    ],
  }
];


export default function App() {
    return (
        <View style={styles.corFundo}>
            <FlatList
                        data={categorias}
                        keyExtractor={item => item.id}
                        renderItem={renderCategoria}
                    />
        </View>
    );
}


function renderCategoria({item}:{item:any}){
  return(
    <View style={styles.categorias}>
    {item.titulo}
    <FlatList
      data={item.filmes}
      keyExtractor={filme=>filme.id}
      horizontal={true}
      // showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingBottom:40}}
      renderItem={({item})=>(
          <Image
          source={{uri:item.imagem}}
          style={[styles.filme]}
          >             
          </Image>
          
        )}
      > </FlatList>
      
    </View>
  )
}

const styles = StyleSheet.create({
       categorias:{
        color:"white",
        backgroundColor: '#000000'
       },
       corFundo:{
        flex:1,
        backgroundColor:"black"
       },
       filme:{
        width:100,
        height:140,
        borderRadius:8,
        margin: 5,        
        justifyContent:'flex-end',
        padding:8
       },
       filmeTitulo:{
        color:'white',
        fontSize:12
       }
});
