
import Card from "@/components/dashboard/Card";
import NewVaultCard from "@/components/dashboard/NewVaultCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { NextPage } from "next";


const Dashboard: NextPage = () => {
  
  
    return (
    <>
        <Header />
            <main className="bg-gray-50 min-h-screen">
                <section className="container mx-auto">
                    <h1>List of vaults</h1>

                        <div className="grid gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        <Card 
                            title="Long Term" 
                            lendingValue={20}
                            borrowValue={2}
                            lendingAPY={4.5}
                            borrowAPY={2.5}
                            healthRatio={2}
                            strategies={["automation", "reinvest"]}
                            color="green" 
                        />
                        <NewVaultCard />
                        
                        {/* <Card 
                            title="Pending Payments" 
                            value={8230.50} 
                            color="yellow" 
                        />
                        <Card 
                            title="Projected Sales" 
                            value={156789.00} 
                            color="purple" 
                        /> */}
                        </div>    
                    
                </section>
            </main>
        <Footer />
    </>
    
  );
};

export default Dashboard;
