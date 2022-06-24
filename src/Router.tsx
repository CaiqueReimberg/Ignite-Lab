import { Route, Routes } from "react-router-dom";
import { Event } from "./pages/Event";
import { Subcsribe } from "./pages/Subscribe";

export function Router() {
  return (
    <Routes>
      <Route path="/"  element={<Subcsribe />}/>
      <Route path="/event"  element={<Event />}/>
      <Route path="/event/lesson/:slug"  element={<Event />}/>
    </Routes>
  )
}
