export default function Home() {
  return (
    <div>
      <h1>A Static Map Image of the Eiffel Tower!</h1>
      <img
        src='https://maps.googleapis.com/maps/api/staticmap?center=48.8584,2.294694&zoom=16&size=400x400&key=${Your_api_key}&markers=color:red|label:S|48.8587,2.293710'

        alt='Effiel Tower'
      />
    </div>
  );
}
