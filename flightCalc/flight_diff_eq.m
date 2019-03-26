clear;
syms y(t) t;
Ft = 1200; % Thrust is constant, in newtons
md = 30; % dry mass (rocket only) in kg
mf = 20; % fuel mass (kg)
Isp = 230; % (seconds)
mdot = Ft/(Isp*9.81); % mass flow rate (kg/sec)
Cd = .5; % coefficient of drag
A = pi*(.1524)^2; % crossectional area (m^2)
tmax = 120;
tspan = [0.0 mf/mdot]; % range of t desired to be computed
init = [0.0 0.0]; % [t, y] initial conditions. or something idk.

m(t) = md+(mf-mdot*t);

rho = 1.2255*(-2.3e-5*(y-44397.5))^4.256;
ode = (Ft)/(m(t))-(rho*Cd*A*(diff(y,t))^2)/(2*(m(t)))-9.81==diff(y,t,2);
V = odeToVectorField(ode);
M = matlabFunction(V,'Vars',{'t','Y'});
sol1 = ode45(M,tspan,init);
tVal1 = linspace(0,mf/mdot);
yVal1 = deval(sol1,tVal1,1);

tspan = [mf/mdot tmax]; % range of t desired to be computed
ode = -sign(diff(y,t))*(rho*Cd*A*(diff(y,t))^2)/(2*(md))-9.81==diff(y,t,2);
V = odeToVectorField(ode);
M = matlabFunction(V,'Vars',{'t','Y'});
init = [deval(sol1,mf/mdot,1),deval(sol1,mf/mdot,2)];
sol2 = ode45(M,tspan,init);
tVal2 = linspace(mf/mdot,tmax);
yVal2 = deval(sol2,tVal2,1);

touchdowntime = tVal2(min(find(yVal2<=0)));

plot(tVal1,yVal1,tVal2,yVal2);
xlabel('t');
ylabel('y(t)');
title('ODE Solution');
xlim([0 touchdowntime]);
ylim([0 12000]);



figure
plot(tVal1,deval(sol1,tVal1,2),tVal2,deval(sol2,tVal2,2));