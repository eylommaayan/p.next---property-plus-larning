import '@/assets/styles/globals.css'

export const metadata = {
    title: 'Property Pulse',
    keyword: 'תיאור',
    description: 'לרשום כאן התאיור והוא יופיע ב-haed'
};

const MainLayout  = ({children}) => {
    return ( 
        <html>
            <body>
                <main>{children}</main>
            </body>
        </html>
     );
}
 
export default MainLayout ;