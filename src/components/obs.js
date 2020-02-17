import React, {Component} from 'react';
import  api from '../services/api.js'
import Modal from './modal'
import './obs.css';       
  

export default class Obs extends Component {
  
  constructor(props) {
    super(props);
    this.state = {showModal: false};
    this.state = {
      data : {},
      scenes: [],
      visible:this.visible,
      sources:[],      
     sceneName:"",
      currentScene:'',
      modal:[]
      }  
    this.mostraModal = this.mostraModal.bind(this);
    this.escondeModal = this.escondeModal.bind(this);
 
  }
  
  mostraModal() {
    this.setState({showModal: true});
   }

  escondeModal() {
    this.setState({showModal: false,sources:[]});
  }
 
  componentDidMount(){
    this.loadData();
  }
  
 
  loadData = async() =>{
    const response = await api.get( `/obs`);    
    const {scenes ,currentScene} = response.data;  
   this.setState ({scenes: scenes,currentScene:currentScene});
   console.log(currentScene);
   
  };   
   
   
 
    render() {   
   let {scenes,sources,visible,currentScene}  =this.state;     
 
   const modal = this.state.showModal ? (
      <Modal>
        <div className="modal">
          <div className="sources">         
          {sources.map(source=>(                               
              <button className="btn-scenes" key={source.name} onClick={
                async()=>{ 
                  this.setState({visible:!source.render})
                  console.log(visible)
                  await api.post('/obs',{sourceName:source.name,visible:visible}).then(()=>{
                    this.setState({visible:!visible})
                  })  
                  console.log(visible)       
                  }
              }>{source.name}</button>   
                      
          ))}
             </div>
          <button className="back" onClick={this.escondeModal}>Voltar</button>
          
        </div>
      </Modal>
    ) : null;  
     
    
        return (
          <div className="container"> 
           <h1>Cenas</h1>     
          <div className="scenes">
            {scenes.map(scene=>(
              <button className="btn-scenes" key={scene.name} onClick={                                
                async() => {
                currentScene=scene.name 
               console.log(currentScene);
                api.put('/obs',{sceneName:scene.name})                
                this.setState({sources: scene.sources})                            
                
                
              if(scene.sources>[]){
                 this.mostraModal()
                 
                 //console.log(scene.name);
                 
                           
               }else{
                 console.log('sources vazio');
                 
                 
               } 
              
               
            } 
            
            }>{scene.name}</button>            
           ))}
           
                       
            {modal}
            </div>            
      </div>
      );
    }
}
