import BalanceDisplay from "@/components/ViewBalance";
import { balances } from "@/app/data";

const BalancePage = () => { 
    return (
      <div>
        <BalanceDisplay balances={balances} />
      </div>
    );
  };
  
  export default BalancePage;