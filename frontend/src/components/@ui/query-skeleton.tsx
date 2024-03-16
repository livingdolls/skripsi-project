export const QuerySkeletonUi = () => {
    return (
        <div className="rounded-md w-full">
            <div className="animate-pulse flex space-x-4">
                <div className="flex-1 space-y-4 py-1">
                    <div className="space-y-2">
                        <div className="h-2 bg-slate-700 rounded"></div>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className="h-2 bg-slate-700 rounded"></div>
                        <div className="h-2 bg-slate-700 rounded"></div>
                        <div className="h-2 bg-slate-700 rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}