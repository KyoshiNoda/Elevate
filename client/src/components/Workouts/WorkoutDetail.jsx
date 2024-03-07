
const WorkoutDetail = () => {
    const workout = {
        title: "Sample Workout",
        videoUrl: "https://www.youtube.com/embed/ErZhd3qvPYs",
        instructions: "Go Brazy For five sets of six reps",
        type: "Cardio",
        muscle: "Legs",
        difficulty: "Intermediate"
    };

    const DifficultyColors={
        "beginner": "text-green-700",
        "intermediate": "text-yellow-700",
         "expert" : "text-red-700",

    }

    const TextDifficultyColor = DifficultyColors[workout.difficulty.toLowerCase()] || "";

    return (
        <div className={`bg-blue-100 py-8 min-h-screen w-screen`}>
            <div className="max-w-4xl mx-auto px-4">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-semibold mb-4">{workout.title}</h2>
                    <div className="aspect-w-16 aspect-h-9 mb-4">
                        <iframe title="Workout Video" src={workout.videoUrl} className="w-full h-full" allowFullScreen></iframe>
                    </div>
                    <p className="mb-4">{workout.instructions}</p>
                    <div className="flex flex-wrap mb-4">
                        <div className="mr-4 mb-2">
                            <strong>Type:</strong> {workout.type}
                        </div>
                        <div className="mr-4 mb-2">
                            <strong>Muscle:</strong> {workout.muscle}
                        </div>
                        <div className="mr-4 mb-2">
                            <strong>Difficulty:</strong> {workout.difficulty}
                            <span className={`ml-2 ${TextDifficultyColor}`}>{workout.difficulty}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkoutDetail;
