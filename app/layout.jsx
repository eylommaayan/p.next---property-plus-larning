import Navbar from '@/components/Navbar'
import '@/assets/styles/globals.css'
import Footer from '@/components/Footer';
export const metadata = {
    title: 'Property Pulse',
    keyword: 'תיאור',
    description: 'לרשום כאן התאיור והוא יופיע ב-haed'
};

const MainLayout  = ({children}) => {
    return ( 
        <html>
            <body>
            
                <Navbar/>
                <main>{children}</main>
                <Footer/>
            </body>
        </html>
     );
}
 
export default MainLayout ;