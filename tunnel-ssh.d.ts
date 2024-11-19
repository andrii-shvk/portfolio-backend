declare module "tunnel-ssh" {
    interface TunnelOptions {
        username: string;
        host: string;
        port: number;
        privateKey: Buffer;
        dstHost: string;
        dstPort: number;
        localHost: string;
        localPort: number;
    }

    function tunnel(
        options: TunnelOptions,
        callback: (error: any, server?: any) => void
    ): void;

    export = tunnel;
}
