import InfoBox from './InfoBox';

const InfoBoxes = () => {
  return (
    <section>
      <div className='container-xl lg:container m-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
          <InfoBox
            heading='להשכרה'
            backgroundColor='bg-gray-100'
            buttonInfo={{
              text: 'Browse Properties',
              link: '/properties',
              backgroundColor: 'bg-black',
            }}
          >
          מצא את נכס החלומות שלך להשכרה. הוסף נכסים למועדפים וצר קשר עם הבעלים
          </InfoBox>
          <InfoBox
            heading='לשוכרים'
            backgroundColor='bg-blue-100'
            buttonInfo={{
              text: 'Add Property',
              link: '/properties/add',
              backgroundColor: 'bg-blue-500',
            }}
          >
       רשמו את הנכסים שלכם והגיעו לשוכרים פוטנציאליים. השכירו כ-Airbnb או לטווח ארוך.
          </InfoBox>
        </div>
      </div>
    </section>
  );
};
export default InfoBoxes;
