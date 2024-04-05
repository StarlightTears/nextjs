export default function MealsPage({params}) {
    return (
      <main>
        <h1>Meals Page</h1>
        <p>{params.slug}</p>
        {/* Add your content here */}
      </main>
    );
  }