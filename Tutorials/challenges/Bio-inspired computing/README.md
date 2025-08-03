# 🐟 Fish Swarm Algorithm, FSA  - Bioinspired Optimization

Este repositorio implementa el **Fish Swarm Algorithm, FSA**, un algoritmo de optimización bioinspirado en el comportamiento colectivo de bancos de peces en busca de alimento. Es una alternativa robusta y versátil frente a otros enfoques evolutivos para resolver problemas complejos de optimización.

## 📌 Descripción

El algoritmo simula el comportamiento de un banco de peces al buscar zonas con alta concentración de alimento, trasladado al contexto computacional como regiones con mejores soluciones. Los peces artificiales se mueven dentro de un espacio de búsqueda, guiados por sus propios descubrimientos y por la información obtenida de otros peces cercanos.

### Tipos de comportamiento:

1. **Búsqueda individual**: Cada pez explora su entorno inmediato en busca de soluciones mejores.
2. **Agrupamiento**: Los peces se acercan a regiones donde sus vecinos han encontrado mejores soluciones, siempre que estas no estén sobrepobladas.
3. **Seguimiento**: Si un pez encuentra una zona con una mejora significativa, es seguido por otros miembros del banco.

> ⚠️ Limitación: Algunos peces pueden quedarse atrapados en óptimos locales.  
> ✅ Mejora: Una versión mejorada del algoritmo permite compartir información global entre todos los peces para mejorar la exploración del espacio.

---

## 🚀 Aplicaciones

- Optimización numérica
- Entrenamiento de redes neuronales
- Planificación y logística
- Selección de características
- Ajuste de hiperparámetros

---

## 🧪 Ejemplo de uso

```python
from fish_school_search import FSS

# Definimos una función objetivo (ejemplo clásico)
def sphere_function(x):
    return sum([xi**2 for xi in x])

# Configuración
fss = FSS(
    function=sphere_function,
    dimensions=10,
    num_fish=30,
    iterations=1000,
    lower_bound=-5.12,
    upper_bound=5.12
)

best_solution, best_score = fss.run()
print("Mejor solución:", best_solution)
print("Mejor valor de la función objetivo:", best_score)

