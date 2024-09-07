import { menuItems } from "./data/db"
import MenuItems from "./types/components/MenuItems"
import useOrder from "./hooks/useOrder"
import OrderContens from "./types/components/OrderContens"
import OrderTotals from "./types/components/OrderTotals"
import TipPorcentage from "./types/components/TipPorcentage"

function App() {

  const { order, addItem, removeItem, tip, setTip, placeOrder } = useOrder()

  return (
    <>


      <header className=" bg-teal-400 py-5">
        <h1 className=" text-center text-4xl font-black">Facturacion de consumo</h1>
      </header>


      <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2">

        <div className=" p-10">
          <h2 className=" text-4xl font-black">Menu</h2>

          <div className=" space-y-3 mt-10">
            {menuItems.map(item => (
              <MenuItems
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}


          </div>

        </div>

        <div className=" border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {order.length > 0 ? (
            <>
              <OrderContens
                removeItem={removeItem}
                order={order}
              />

              <TipPorcentage
                setTip={setTip}
                tip={tip}

              />

              <OrderTotals
                order={order}
                tip={tip}
                placeOrder={placeOrder}
              />

            </>
          ) : (
            <p className=" text-center">La orden esta vacia</p>

          )}


        </div>


      </main>
    </>
  )
}

export default App
