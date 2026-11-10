export interface mockData {
    datasets: dataSets[]
}

export interface dataSets {
    light_data: lightData[]
}

export interface lightData {
    lux: number
    timestamp: string
}