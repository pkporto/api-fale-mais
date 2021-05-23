import Plan  from "@entities/Plan";

export default interface IPlanRepository {
    get(name: string): Promise<Plan>;
    
}