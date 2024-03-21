import BalanceDisplay from "@/components/ViewBalance";

const BalancePage = () => {
    const balances = {
      "2024-03-01": {
        principal: 1500,
        loans: 250,
        interest: 10
      },
      "2024-03-02": {
        principal: 1550,
        loans: 299,
        interest: 5
      }
    };
  
    return (
      <div>
        <BalanceDisplay balances={balances} />
      </div>
    );
  };
  
  export default BalancePage;