

import { format } from "date-fns";
import Header from "../_components/header";
import { ptBR } from "date-fns/locale";

export default function Home() {
  return (
    <div>
      <Header></Header>

      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Lucas!</h2>
        
        <p className="capitalize text-sm">
          {format(new Date(), "EEEE',' d 'de' MMMM 'de' yyyy " , 
          { locale: ptBR })}
        </p>


      </div>
    </div>

  );
}
