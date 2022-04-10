# Generate chart
helm template streamaccess-spa --name-template=streamaccess-spa > spa-output.yaml

# Delete and apply generated chart
kubectl delete -f spa-output.yaml 
kubectl apply -f spa-output.yaml 