import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { OrderComponent } from "app/order/order.component";

export class LeaveOrderGuard implements CanDeactivate<OrderComponent> {

  canDeactivate(ordercomponent: OrderComponent,
                activatedRoute: ActivatedRouteSnapshot,
                routerState: RouterStateSnapshot): boolean {
      if(!ordercomponent.isOrderCompleted()){
        return window.confirm('Deseja desistir da compra?')
      }else{
        return true
      }
  }
}
