

import { format } from "date-fns";
import Header from "../_components/header";
import { ptBR } from "date-fns/locale";
import Search from "./_components/search";
import BookingItem from "../_components/booking-item";

export default function Home() {
  return (
    <div>
      <Header/>

      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Lucas!</h2>
        
        <p className="capitalize text-sm">
          {format(new Date(), "EEEE',' d 'de' MMMM 'de' yyyy " , 
          { locale: ptBR })}
        </p>
      

      </div>

      <div className="px-5 mt-6">
        <Search/>
      </div>

      <div className="px-5 mt-6">
        <BookingItem/>
      </div>
    </div>

  );
}
