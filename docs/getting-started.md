# Installation

```bash
    pip install geomfum@git+https://github.com/DiG-AIR/geomfum.git@main
```

Or the classic pipeline: ``clone + pip install``.

⚠️ **ISSUES**

- Installation issues may arise from dependencies relying on C++ (particularly `robust_laplacian <https://pypi.org/project/robust-laplacian/>`_).

- Make sure all their requirements are installed.

- For `pyRMT`, follow the instructions `here <https://github.com/filthynobleman/rematching/tree/python-binding>`_.

# How to use


The `how-to notebooks <./notebooks/how_to>`_ are designed to safely let you dive in the package.

Why not starting from the `beginning <./notebooks/how_to/load_mesh_from_file.ipynb>`_ and simply follow the links that inspire you the most?

# Choose the backend

GeomFuM can run seamlessly with ``numpy`` and ``pytorch``. 
By default, the ``numpy`` backend is used. The visualizations are only available with this backend.

The backend is based on the `Geomstats <https://github.com/geomstats/geomstats>`_ backend, which is installed automatically. The GeomFuM backend add functionality, especially regarding sparse matrices and device handling.

You can choose your backend by setting the environment variable
``GEOMSTATS_BACKEND`` to ``numpy``, or ``pytorch``, and
importing the backend module. From the command line:


```bash
    export GEOMSTATS_BACKEND=<backend_name>
```
and in the Python3 code:

```bash
    import geomstats.backend as gs
    import geomfum.backend as xgs
```

# Contributions


We welcome contributions from the community!  
If you have suggestions, bug reports, or want to improve the code or documentation, feel free to:

- Open an issue
- Submit a pull request
- Improve or add new examples/notebooks

Please follow our contribution guidelines (coming soon) and adhere to best practices for clean, modular, and well-documented code.

# Community

Join our Discord Server! https://discord.gg/6sYmEbUp

