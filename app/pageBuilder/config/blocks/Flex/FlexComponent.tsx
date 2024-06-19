const FlexComponent: React.FunctionComponent<React.PropsWithChildren<{}>> = ({ children }) => {
    return <div className="flex gap-6 flex-wrap">{children}</div>
}
export default FlexComponent