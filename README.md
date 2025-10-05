# Silksong Tracker

Silksong Tracker is a web-based tool designed to help players track their progress and collectibles in Hollow Knight: Silksong. Built with React and Vite, it provides an interactive interface for managing game data, visualizing completion percentages, and viewing metadata about various in-game items.

## Features

- **Progress Tracking:** Track collectibles such as mask shards, spool fragments, and mementos.
- **Sectioned UI:** Organized tabs and sections for different collectible types and game areas.
- **Percentage Calculation:** Visualize completion rates for each category and overall progress.
- **Data Filtering:** Filter and sort game data for easier navigation.
- **Metadata Display:** View detailed information about items and collectibles.
- **Modern UI:** Responsive design with custom components for a smooth user experience.

## Project Structure

```
Silksong-Tracker/
├── src/
│   ├── constants.ts           # Global constants
│   ├── filterData.ts         # Data filtering logic
│   ├── index.css             # Main stylesheet
│   ├── index.tsx             # App entry point
│   ├── metadata.ts           # Metadata definitions
│   ├── percentage.ts         # Completion percentage logic
│   ├── types.ts              # TypeScript types
│   ├── typings.d.ts          # TypeScript type declarations
│   ├── utils.ts              # Utility functions
│   ├── decoder/              # Data decoding logic
│   └── ui/                   # UI components and tabs
│       ├── components/       # Shared UI components
│       └── tabs/             # Tabbed sections for collectibles
├── data/                     # Game data and tools
├── static/                   # Static assets (images, icons)
├── tests/                    # Unit tests
├── index.html                # HTML entry point
├── package.json              # Project dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── vite.config.mts           # Vite configuration
└── README.md                 # Project documentation
```

## Getting Started

### Prerequisites
- bun

### Installation

```bash
bun install
```

### Running the App

```bash
bun dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the tracker. Use `bun run build` to create a production build.

## Testing

Unit tests are located in the `tests/` directory. Run tests with:

```bash
bun test
```

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements and bug fixes.

## License

MIT License

---

*This project is not affiliated with Team Cherry or Hollow Knight: Silksong. All assets and references are for fan use only.*
