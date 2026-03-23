import Hello from './components/Hello.jsx'
import Count from './components/Counter.jsx'
import Timer from './components/Tmer.jsx'
import Greet from './components/greetings.jsx';
function app(){
  return(
    <div>
      {/* <h1>hii from app!</h1>
       <Hello />
       <Count />
      <Timer /> */}
      <Greet />
    </div>
  );
}
export default app;