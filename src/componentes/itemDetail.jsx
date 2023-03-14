import Tab from 'react-bootstrap/Tab';
import './itemDetail.scss'
import Tabs from 'react-bootstrap/Tabs';
import ItemDetailCount from './ItemDetailCount';

const ItemDetail = ({ item }) => {

    return (
        <div className="itemDetail">
            <article className="infoD">
                <img src={item.img} alt={item.title} />
                <div className='infoCompra'>
                    <h2>{item.title}</h2>
                    <div className="info-price">
                        <h5>${item.price}.-</h5>
                    </div>
                    <div className='dosBotonesD'>
                        <ItemDetailCount className="input" item={item} />
                    </div>
                    <hr />
                    <div className='descripcion'>
                        <h3>Descripcion</h3>
                        <p>Preparado alimenticio que contiene una disolución de la planta {item.name}. La gama de las 38 Flores de Bach® Originales, creadas en la década de 1930 por el investigador inglés Edward Bach, cuenta con una cuidadosa selección de flores, plantas y árboles silvestres. Estos remedios se obtienen de forma homeopática y cada uno de ellos está indicado para tratar un trastorno emocional distinto.
                        Edward Bach dijo: “La salud depende de estar en armonía con nuestras almas” La terapia de las flores de Bach es una terapia global ya que tratan al individuo y no la enfermedad ni sus sintomas. A la hora de utilizar las flores de Bach no solo se tiene en cuenta la salud de la persona, sino también, su estado de ánimo, su personalidad y su modo de enfrentarse a los problemas. Ahí radica una de las claves de las flores de Bach. Cada una de las 38 flores existentes actúan sobre un estado emocional específico. La clave es conocer el origen del por que de nuestros desajustes, lo que provocó la enfermedad no la enfermedad directamente para poder tratarla.</p>
                    </div>
                </div>
            </article>
            <Tabs id="uncontrolled-tab-example" className='tabs'>
                <Tab eventKey="1" title="presentación" className='detalleProducto'>
                    <p>Frasco de cristal de 20 ml con gotero.</p>
                    </Tab>
                    <Tab eventKey="profile" title="Como usar" className='detalleProducto'>
                    <p>PREPARADO SIMPLE: Diluya 2 gotas en un vaso de agua y beba a sorbos y a intervalos. O bien añada 2 gotas en un frasco cuentagotas de 30 ml. con agua y toma 4 gotas, al menos 4 veces al día.</p>
                </Tab>
            </Tabs>
        </div>
        
    );
};
export default ItemDetail;